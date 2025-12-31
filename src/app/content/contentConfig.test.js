import assert from 'node:assert/strict';
import test from 'node:test';
import { contentConfig } from './contentConfig.js';

test('social links include GitHub and LinkedIn with new tab behavior', () => {
  assert.ok(
    Array.isArray(contentConfig.socialLinks),
    'socialLinks should be an array'
  );
  assert.ok(contentConfig.socialLinks.length > 0, 'socialLinks should exist');

  const github = contentConfig.socialLinks.find((link) => link.id === 'github');
  const linkedin = contentConfig.socialLinks.find(
    (link) => link.id === 'linkedin'
  );

  assert.ok(github, 'GitHub link should exist');
  assert.ok(linkedin, 'LinkedIn link should exist');

  [github, linkedin].forEach((link) => {
    assert.ok(link?.href, 'link href should be defined');
    assert.equal(link?.openInNewTab, true, 'link should open in new tab');
  });

  assert.equal(github?.icon, 'github');
  assert.equal(linkedin?.icon, 'linkedin');
});

test('nav items include site name and primary pages', () => {
  assert.ok(Array.isArray(contentConfig.navItems), 'navItems should be an array');
  const requiredIds = ['home', 'about', 'blog', 'projects'];
  const navIds = contentConfig.navItems.map((item) => item.id);

  requiredIds.forEach((id) => {
    assert.ok(navIds.includes(id), `nav item ${id} should exist`);
  });

  const homeItem = contentConfig.navItems.find((item) => item.id === 'home');
  assert.equal(homeItem?.label, contentConfig.siteName);
  assert.equal(homeItem?.href, '/');
  assert.equal(homeItem?.kind, 'internal');
});

test('about items include at least one entry', () => {
  assert.ok(Array.isArray(contentConfig.aboutItems), 'aboutItems should be an array');
  assert.ok(contentConfig.aboutItems.length > 0, 'aboutItems should exist');
  contentConfig.aboutItems.forEach((item) => {
    assert.ok(item.id, 'about item id should be defined');
    assert.ok(item.title, 'about item title should be defined');
    assert.ok(item.body, 'about item body should be defined');
  });
});

test('tech stack items include at least one entry', () => {
  assert.ok(Array.isArray(contentConfig.techStackItems), 'techStackItems should be an array');
  assert.ok(contentConfig.techStackItems.length > 0, 'techStackItems should exist');
  contentConfig.techStackItems.forEach((item) => {
    assert.ok(item.id, 'tech stack item id should be defined');
    assert.ok(item.name, 'tech stack item name should be defined');
  });
});

test('blog items include at least one entry', () => {
  assert.ok(Array.isArray(contentConfig.blogItems), 'blogItems should be an array');
  assert.ok(contentConfig.blogItems.length > 0, 'blogItems should exist');
  contentConfig.blogItems.forEach((item) => {
    assert.ok(item.id, 'blog item id should be defined');
    assert.ok(item.title, 'blog item title should be defined');
    assert.ok(item.summary, 'blog item summary should be defined');
  });
});

test('project items include at least one entry', () => {
  assert.ok(Array.isArray(contentConfig.projectItems), 'projectItems should be an array');
  assert.ok(contentConfig.projectItems.length > 0, 'projectItems should exist');
  contentConfig.projectItems.forEach((item) => {
    assert.ok(item.id, 'project item id should be defined');
    assert.ok(item.name, 'project item name should be defined');
    assert.ok(item.summary, 'project item summary should be defined');
  });
});
