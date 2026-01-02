import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const trackerPath = new URL('./routeViewTracker.tsx', import.meta.url);
const trackerSource = fs.readFileSync(trackerPath, 'utf8');

test('route view tracker listens to route changes', () => {
  assert.ok(trackerSource.includes('useLocation'), 'uses router location');
  assert.ok(trackerSource.includes('useEffect'), 'uses effect for tracking');
});

test('route view tracker sends page view via analytics adapter', () => {
  assert.ok(trackerSource.includes('trackPageView'), 'sends page view');
});

test('route view tracker depends on location changes', () => {
  assert.ok(trackerSource.includes('[location.pathname]'), 'tracks path changes');
});
