import assert from 'node:assert/strict';
import test from 'node:test';
import { getHeaderClassName, getMainClassName } from './layoutUtils.js';

test('getHeaderClassName applies fixed header layout classes', () => {
  const classes = getHeaderClassName();
  ['fixed', 'top-0', 'left-0', 'right-0', 'z-50'].forEach((token) => {
    assert.ok(classes.includes(token), `expected ${token} in header class`);
  });
});

test('getMainClassName offsets content below header on small screens', () => {
  const classes = getMainClassName();
  assert.ok(classes.includes('pt-14'));
  assert.ok(classes.includes('sm:pt-16'));
});
