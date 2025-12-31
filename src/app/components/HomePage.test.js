import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const pagePath = new URL('./HomePage.tsx', import.meta.url);
const pageSource = fs.readFileSync(pagePath, 'utf8');

test('HomePage keeps primary layout within main content and readable layout', () => {
  assert.ok(pageSource.includes('max-w-6xl'), 'constrains main content width');
  assert.ok(pageSource.includes('px-6'), 'adds horizontal padding');
  assert.ok(pageSource.includes('text-amber-800'), 'uses readable text color');
});

test('HomePage hero provides visual separation for focus blocks', () => {
  assert.ok(pageSource.includes('border border-amber-200/80'), 'uses visual separators');
  assert.ok(pageSource.includes('bg-amber-50/90'), 'uses subtle contrast surfaces');
});

test('HomePage displays last updated label from config', () => {
  assert.ok(pageSource.includes('contentConfig.lastUpdated'), 'uses last updated config');
  assert.ok(pageSource.includes('Updated'), 'renders updated label');
});
