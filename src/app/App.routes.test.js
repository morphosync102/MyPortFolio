import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const appPath = new URL('./App.tsx', import.meta.url);
const appSource = fs.readFileSync(appPath, 'utf8');

const requiredRoutes = ['/profile', '/blog', '/projects'];

test('App routes include required primary pages', () => {
  requiredRoutes.forEach((route) => {
    const pattern = new RegExp(`<Route\\s+path=\\"${route}\\"`, 'g');
    assert.ok(pattern.test(appSource), `expected route ${route}`);
  });
});
