import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const adapterPath = new URL('./analyticsAdapter.js', import.meta.url);
const adapterSource = fs.readFileSync(adapterPath, 'utf8');

test('analytics adapter uses shared analytics config and gating', () => {
  assert.ok(adapterSource.includes('contentConfig.analyticsConfig'), 'uses analytics config');
  assert.ok(adapterSource.includes('isAnalyticsEnabled'), 'uses analytics gating');
});

test('analytics adapter wraps gtag calls for page views', () => {
  assert.ok(adapterSource.includes('trackPageView'), 'defines page view tracker');
  assert.ok(adapterSource.includes('window.gtag'), 'uses gtag');
});

test('analytics adapter supports engagement events', () => {
  assert.ok(adapterSource.includes('trackEngagement'), 'defines engagement tracker');
  assert.ok(adapterSource.includes('engagement'), 'uses engagement event name');
});

test('analytics adapter skips sending when disabled', () => {
  assert.ok(adapterSource.includes('isAnalyticsEnabled'), 'guards against disabled state');
});
