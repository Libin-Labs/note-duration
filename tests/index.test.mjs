import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('quarter and whole', () => {
  assert.equal(api.noteBeats(4), 1);
  assert.equal(api.noteBeats(1), 4);
});
test('dotted notes', () => {
  assert.equal(api.noteBeats(4, 1), 1.5);
  assert.equal(api.noteBeats(4, 2), 1.75);
});
test('triplet eighth', () => {
  assert.equal(api.noteBeats(8, 0, 3, 2), 1 / 3);
});
test('tempo duration', () => {
  assert.equal(api.noteSeconds(4, 120), 0.5);
});
test('invalid notation', () => {
  assert.throws(() => api.noteBeats(3));
  assert.throws(() => api.noteBeats(4, 5));
  assert.throws(() => api.noteSeconds(4, 0));
});
test('geometric dots oracle', () => {
  for (let dots = 0; dots <= 4; dots++) {
    let expected = 0;
    for (let d = 0; d <= dots; d++) expected += 0.5 ** d;
    assert.equal(api.noteBeats(4, dots), expected);
  }
});
