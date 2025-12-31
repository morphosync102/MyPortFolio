import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const pagePath = new URL('./ProjectsPage.tsx', import.meta.url);
const pageSource = fs.readFileSync(pagePath, 'utf8');

test('ProjectsPage uses content data for project items', () => {
  assert.ok(/projectItems\.map/.test(pageSource), 'maps project items');
});

test('ProjectsPage renders items as cards', () => {
  assert.ok(pageSource.includes('border border-amber-200/80'), 'uses card border');
  assert.ok(pageSource.includes('rounded-2xl'), 'uses rounded card');
});
