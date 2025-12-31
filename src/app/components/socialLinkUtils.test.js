import assert from 'node:assert/strict';
import test from 'node:test';
import { getVisibleSocialLinks } from './socialLinkUtils.js';

test('getVisibleSocialLinks filters to supported icons', () => {
  const links = [
    { id: 'github', href: 'https://github.com', icon: 'github', openInNewTab: true },
    { id: 'linkedin', href: 'https://linkedin.com', icon: 'linkedin', openInNewTab: true },
    { id: 'x', href: 'https://x.com', icon: 'x', openInNewTab: true },
  ];
  const result = getVisibleSocialLinks(links);
  assert.deepEqual(result.map((item) => item.id), ['github', 'linkedin']);
});

test('getVisibleSocialLinks returns empty array when missing data', () => {
  const links = [{ id: 'github', href: '', icon: 'github', openInNewTab: true }];
  assert.deepEqual(getVisibleSocialLinks(links), []);
});
