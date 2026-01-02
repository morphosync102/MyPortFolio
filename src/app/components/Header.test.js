import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const headerPath = new URL('./Header.tsx', import.meta.url);
const headerSource = fs.readFileSync(headerPath, 'utf8');

test('Header uses active route highlighting via isNavActive', () => {
  assert.ok(headerSource.includes('isNavActive('), 'uses route matching helper');
  assert.ok(
    headerSource.includes('bg-amber-200/80 text-amber-950'),
    'applies active background highlight'
  );
});

test('Header renders GitHub and LinkedIn icons when configured', () => {
  assert.ok(headerSource.includes('Github'), 'includes GitHub icon');
  assert.ok(headerSource.includes('Linkedin'), 'includes LinkedIn icon');
});

test('Header includes theme toggle control', () => {
  assert.ok(headerSource.includes('ThemeToggle'), 'renders theme toggle');
});
