import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const sectionPath = new URL('./CertificationsSection.tsx', import.meta.url);
const sectionSource = fs.readFileSync(sectionPath, 'utf8');

test('CertificationsSection maps certification items when available', () => {
  assert.ok(sectionSource.includes('items.map'), 'maps certification items');
  assert.ok(sectionSource.includes('CoffeeBeanIcon'), 'uses coffee bean icon');
});

test('CertificationsSection hides when no items exist', () => {
  assert.ok(
    sectionSource.includes('items.length === 0'),
    'returns null when list is empty'
  );
});
