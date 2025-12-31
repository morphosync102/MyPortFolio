import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const blogPath = new URL('./BlogPage.tsx', import.meta.url);
const blogSource = fs.readFileSync(blogPath, 'utf8');

test('BlogPage uses content data for blog items', () => {
  assert.ok(/blogItems\.map/.test(blogSource), 'maps blog items');
});

test('BlogPage renders items as cards', () => {
  assert.ok(blogSource.includes('border border-amber-200/80'), 'uses card border');
  assert.ok(blogSource.includes('rounded-2xl'), 'uses rounded card');
});
