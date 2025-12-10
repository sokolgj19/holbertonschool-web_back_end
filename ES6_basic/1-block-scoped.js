export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   // block-scoped, does NOT overwrite outer task
    const task2 = false; // block-scoped, does NOT overwrite outer task2
  }

  return [task, task2];
}
