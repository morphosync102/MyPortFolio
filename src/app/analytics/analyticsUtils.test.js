import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const helperPath = new URL('./analyticsUtils.js', import.meta.url);
const helperSource = fs.readFileSync(helperPath, 'utf8');

test('analytics helper uses Vite env gating', () => {
  assert.ok(helperSource.includes('import.meta.env'), 'uses Vite env');
  assert.ok(helperSource.includes('enableInDev'), 'references enableInDev');
});

test('analytics helper supports engagement event guard', () => {
  assert.ok(helperSource.includes('isEngagementEventEnabled'), 'defines guard');
});

test('analytics helper uses enabled gating', () => {
  assert.ok(helperSource.includes('isAnalyticsEnabled'), 'exports enabled guard');
});
