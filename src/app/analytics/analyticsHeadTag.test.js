import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';

const htmlPath = new URL('../../../index.html', import.meta.url);
const htmlSource = fs.readFileSync(htmlPath, 'utf8');

test('index.html includes Google Analytics tag', () => {
  assert.ok(
    htmlSource.includes('googletagmanager.com/gtag/js?id=G-697ZRDS79V'),
    'includes gtag script with measurement id'
  );
  assert.ok(
    htmlSource.includes('gtag(') && htmlSource.includes('G-697ZRDS79V'),
    'includes gtag initialization'
  );
});
