
const tests = [];

export function test(fn, name) {
  tests.push({name, fn});
}

function succeeded(name) {
  console.log(`[PASSED] ${name}`);
}

function failed(name, error) {
  console.log(`[FAILED] ${name}:\n ${error}`);
}

export async function run() {
  for (test of tests) {
    try {
      await test.fn();
      succeeded(test.name);
    } catch (err) {
      failed(test.name, err);
    }
  }
}

export function assert_equals(a, b, message) {
  if (a !== b) throw new Error(`${message}: Value "${b}" does not equal "${a}"`);
}

export function assert_true(a) {
  if (!a) throw new Error(`Value "${a}" is not true`);
}

export const HOST = 'http://localhost:3002';
