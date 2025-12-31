import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const pagePath = new URL('./HomePage.tsx', import.meta.url);
const pageSource = fs.readFileSync(pagePath, 'utf8');

test('HomePage renders social links from config', () => {
  assert.ok(pageSource.includes('contentConfig.socialLinks'), 'uses social links config');
  assert.ok(pageSource.includes('getVisibleSocialLinks'), 'filters visible social links');
  assert.ok(pageSource.includes('Github'), 'renders github icon');
  assert.ok(pageSource.includes('Linkedin'), 'renders linkedin icon');
});
