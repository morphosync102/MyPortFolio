import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const appPath = new URL('./App.tsx', import.meta.url);
const appSource = fs.readFileSync(appPath, 'utf8');

test('App wraps routes with Header and main offset', () => {
  assert.ok(appSource.includes('<Header />'), 'renders Header');
  assert.ok(appSource.includes('getMainClassName()'), 'applies main offset');
});
