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
  const requiredIds = ['home', 'profile', 'blog', 'projects'];
  const navIds = contentConfig.navItems.map((item) => item.id);

  requiredIds.forEach((id) => {
    assert.ok(navIds.includes(id), `nav item ${id} should exist`);
  });

  const homeItem = contentConfig.navItems.find((item) => item.id === 'home');
  assert.equal(homeItem?.label, contentConfig.siteName);
  assert.equal(homeItem?.href, '/');
  assert.equal(homeItem?.kind, 'internal');
});

test('content config includes last updated label', () => {
  assert.ok(contentConfig.lastUpdated, 'lastUpdated should be defined');
});

test('roles items include required fields', () => {
  assert.ok(Array.isArray(contentConfig.rolesItems), 'rolesItems should be an array');
  assert.ok(contentConfig.rolesItems.length > 0, 'rolesItems should exist');
  contentConfig.rolesItems.forEach((item) => {
    assert.ok(item.id, 'roles item id should be defined');
    assert.ok(item.company, 'roles item company should be defined');
    assert.ok(item.title, 'roles item title should be defined');
    assert.ok(item.summary, 'roles item summary should be defined');
  });
});

test('skills items include at least one entry', () => {
  assert.ok(Array.isArray(contentConfig.skillsItems), 'skillsItems should be an array');
  assert.ok(contentConfig.skillsItems.length > 0, 'skillsItems should exist');
  contentConfig.skillsItems.forEach((item) => {
    assert.ok(item.id, 'skills item id should be defined');
    assert.ok(item.name, 'skills item name should be defined');
    assert.ok(item.description, 'skills item description should be defined');
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

test('hobbies items include at least one entry', () => {
  assert.ok(Array.isArray(contentConfig.hobbiesItems), 'hobbiesItems should be an array');
  assert.ok(contentConfig.hobbiesItems.length > 0, 'hobbiesItems should exist');
  contentConfig.hobbiesItems.forEach((item) => {
    assert.ok(item.id, 'hobbies item id should be defined');
    assert.ok(item.name, 'hobbies item name should be defined');
    assert.ok(item.description, 'hobbies item description should be defined');
  });
});


test('certifications items include required fields', () => {
  assert.ok(
    Array.isArray(contentConfig.certificationsItems),
    'certificationsItems should be an array'
  );
  assert.ok(
    contentConfig.certificationsItems.length > 0,
    'certificationsItems should exist'
  );
  contentConfig.certificationsItems.forEach((item) => {
    assert.ok(item.id, 'certifications item id should be defined');
    assert.ok(item.name, 'certifications item name should be defined');
    assert.ok(item.description, 'certifications item description should be defined');
  });
});
