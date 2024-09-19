export function genId(): number {
  return Math.floor(10000000 + Math.random() * 90000000);
}

export const directions = new Map([
  ["nw", [-1, -1]],
  ["n", [-1, 0]],
  ["ne", [-1, 1]],
  ["w", [0, -1]],
  ["e", [0, 1]],
  ["sw", [1, -1]],
  ["s", [1, 0]],
  ["se", [1, 1]],
]);
