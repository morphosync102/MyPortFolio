import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const themePath = new URL('./theme.css', import.meta.url);
const themeSource = fs.readFileSync(themePath, 'utf8');

test('theme uses warm palette tokens for cozy cabin tone', () => {
  assert.ok(themeSource.includes('--background: #fff6ed;'));
  assert.ok(themeSource.includes('--foreground: #3c2f2a;'));
  assert.ok(themeSource.includes('--destructive: #d9a6a0;'));
  assert.ok(themeSource.includes('--chart-1: #c3895e;'));
  assert.ok(themeSource.includes('--chart-2: #d3a47f;'));
  assert.ok(themeSource.includes('--chart-3: #e3be9c;'));
  assert.ok(themeSource.includes('--chart-4: #f0d4b6;'));
  assert.ok(themeSource.includes('--chart-5: #f6e3cd;'));
});
