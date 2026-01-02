import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import { contentConfig } from '../content/contentConfig.js';

test('analytics config defines measurement id and dev gating', () => {
  assert.ok(contentConfig.analyticsConfig, 'analyticsConfig should exist');
  assert.ok(contentConfig.analyticsConfig.measurementId, 'measurementId should be defined');
  assert.equal(
    typeof contentConfig.analyticsConfig.enableInDev,
    'boolean',
    'enableInDev should be boolean'
  );
  assert.ok(
    Array.isArray(contentConfig.analyticsConfig.engagementEvents),
    'engagementEvents should be an array'
  );
});

test('analytics config uses Vite env gating helper', () => {
  const helperPath = new URL('./analyticsUtils.js', import.meta.url);
  const helperSource = fs.readFileSync(helperPath, 'utf8');
  assert.ok(helperSource.includes('import.meta.env'), 'uses Vite env');
  assert.ok(helperSource.includes('enableInDev'), 'references enableInDev');
});
