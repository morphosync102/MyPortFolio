import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const aboutPath = new URL('./AboutPage.tsx', import.meta.url);
const aboutSource = fs.readFileSync(aboutPath, 'utf8');

test('AboutPage uses content data for roles, skills, and hobbies', () => {
  assert.ok(/rolesItems\.map/.test(aboutSource), 'maps roles items');
  assert.ok(/skillsItems\.map/.test(aboutSource), 'maps skills items');
  assert.ok(/hobbiesItems\.map/.test(aboutSource), 'maps hobbies items');
});

test('AboutPage connects certifications section', () => {
  assert.ok(
    aboutSource.includes('certificationsItems'),
    'reads certifications items'
  );
  assert.ok(
    aboutSource.includes('CertificationsSection'),
    'renders certifications section'
  );
});

test('AboutPage renders items as lists', () => {
  assert.ok(aboutSource.includes('about-list'), 'uses list class');
  assert.ok(aboutSource.includes('about-list-item'), 'uses list item class');
});

test('AboutPage renders coffee bean icons for list items', () => {
  assert.ok(aboutSource.includes('CoffeeBeanIcon'), 'uses coffee bean icon');
  assert.ok(aboutSource.includes('coffee-bean-icon'), 'uses coffee bean icon class');
});

test('AboutPage hides sections when item lists are empty', () => {
  assert.ok(
    aboutSource.includes('rolesItems.length > 0'),
    'checks roles list length'
  );
  assert.ok(
    aboutSource.includes('skillsItems.length > 0'),
    'checks skills list length'
  );
  assert.ok(
    aboutSource.includes('hobbiesItems.length > 0'),
    'checks hobbies list length'
  );
});
