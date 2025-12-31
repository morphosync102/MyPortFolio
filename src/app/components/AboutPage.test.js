import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const aboutPath = new URL('./AboutPage.tsx', import.meta.url);
const aboutSource = fs.readFileSync(aboutPath, 'utf8');

test('AboutPage uses content data for about and tech stack items', () => {
  assert.ok(/aboutItems\.map/.test(aboutSource), 'maps about items');
  assert.ok(/techStackItems\.map/.test(aboutSource), 'maps tech stack items');
});

test('AboutPage renders items as cards', () => {
  assert.ok(aboutSource.includes('border border-amber-200/80'), 'uses card border');
  assert.ok(aboutSource.includes('rounded-2xl'), 'uses rounded card');
});
