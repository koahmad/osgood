
import { run } from './harness.js';

// Tests
import './basic/accept-header.js';
import './basic/conditional-get.js';

export default async () => {
  await run();
  return "done\n";
}