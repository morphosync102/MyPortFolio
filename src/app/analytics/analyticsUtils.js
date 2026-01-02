export function isAnalyticsEnabled(config) {
  if (!config || !config.measurementId) {
    return false;
  }

  if (import.meta.env.DEV) {
    return config.enableInDev;
  }

  return true;
}

export function isEngagementEventEnabled(config, eventName) {
  if (!config || !Array.isArray(config.engagementEvents)) {
    return false;
  }

  return config.engagementEvents.includes(eventName);
}
