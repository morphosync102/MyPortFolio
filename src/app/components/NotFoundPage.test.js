import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const pagePath = new URL('./NotFoundPage.tsx', import.meta.url);
const pageSource = fs.readFileSync(pagePath, 'utf8');

test('NotFoundPage provides 404 label and home link', () => {
  assert.ok(pageSource.includes('404'), 'includes 404 label');
  assert.ok(pageSource.includes('Back Home'), 'includes home link label');
  assert.ok(pageSource.includes('to="/"'), 'links back to home');
});
