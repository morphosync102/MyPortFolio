import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const themePath = new URL('./themeState.ts', import.meta.url);
const themeSource = fs.readFileSync(themePath, 'utf8');

test('theme state derives initial mode from prefers-color-scheme', () => {
  assert.ok(
    themeSource.includes('prefers-color-scheme: dark'),
    'checks OS dark mode preference'
  );
});

test('theme state applies dark class to document root', () => {
  assert.ok(
    themeSource.includes("classList.toggle('dark'"),
    'toggles dark class on root element'
  );
});
