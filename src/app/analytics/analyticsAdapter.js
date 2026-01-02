import { contentConfig } from '../content/contentConfig.js';
import { isAnalyticsEnabled, isEngagementEventEnabled } from './analyticsUtils.js';

function safeGtagCall(...args) {
  if (!isAnalyticsEnabled(contentConfig.analyticsConfig)) {
    return;
  }

  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  try {
    window.gtag(...args);
  } catch (_error) {
    // Swallow analytics errors to avoid breaking UI.
  }
}

export function trackPageView(path, title) {
  safeGtagCall('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
}

export function trackEngagement(name, metadata = {}) {
  if (!isEngagementEventEnabled(contentConfig.analyticsConfig, name)) {
    return;
  }

  safeGtagCall('event', name, { engagement: true, ...metadata });
}
