import assert from 'node:assert/strict';
import test from 'node:test';
import { isNavActive } from './headerUtils.js';

test('isNavActive matches exact root path', () => {
  assert.equal(isNavActive('/', '/'), true);
  assert.equal(isNavActive('/about', '/'), false);
});

test('isNavActive matches exact section path', () => {
  assert.equal(isNavActive('/about', '/about'), true);
  assert.equal(isNavActive('/about/', '/about'), true);
  assert.equal(isNavActive('/about/team', '/about'), true);
});

test('isNavActive does not match sibling paths', () => {
  assert.equal(isNavActive('/about-team', '/about'), false);
  assert.equal(isNavActive('/blogging', '/blog'), false);
});
