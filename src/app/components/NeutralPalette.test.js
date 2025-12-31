import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const aboutPath = new URL('./AboutPage.tsx', import.meta.url);
const blogPath = new URL('./BlogPage.tsx', import.meta.url);
const projectsPath = new URL('./ProjectsPage.tsx', import.meta.url);

const aboutSource = fs.readFileSync(aboutPath, 'utf8');
const blogSource = fs.readFileSync(blogPath, 'utf8');
const projectsSource = fs.readFileSync(projectsPath, 'utf8');

test('Card sections use warm surfaces and borders', () => {
  [aboutSource, blogSource, projectsSource].forEach((source) => {
    assert.ok(source.includes('border border-amber-200/80'), 'uses warm border');
    assert.ok(source.includes('bg-amber-50/90'), 'uses warm surface');
    assert.ok(source.includes('text-amber-800'), 'uses muted warm text');
  });
});
