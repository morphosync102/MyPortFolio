import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const togglePath = new URL('./ThemeToggle.tsx', import.meta.url);
const toggleSource = fs.readFileSync(togglePath, 'utf8');

test('ThemeToggle uses theme context for state and toggling', () => {
  assert.ok(toggleSource.includes('useTheme'), 'uses theme context hook');
  assert.ok(toggleSource.includes('toggle'), 'calls toggle handler');
});

test('ThemeToggle shows sun and moon icons', () => {
  assert.ok(toggleSource.includes('Sun'), 'includes sun icon');
  assert.ok(toggleSource.includes('Moon'), 'includes moon icon');
});
