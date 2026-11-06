function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function noteBeats(
  denominator: number,
  dots = 0,
  tupletPlayed = 1,
  tupletInTimeOf = 1,
): number {
  integer(denominator, 1, 1024);
  if ((denominator & (denominator - 1)) !== 0)
    throw new RangeError('Power of two denominator required');
  integer(dots, 0, 4);
  integer(tupletPlayed, 1, 64);
  integer(tupletInTimeOf, 1, 64);
  return ((4 / denominator) * (2 - 2 ** -dots) * tupletInTimeOf) / tupletPlayed;
}
export function noteSeconds(
  denominator: number,
  bpm: number,
  dots = 0,
  tupletPlayed = 1,
  tupletInTimeOf = 1,
): number {
  return finite(
    (noteBeats(denominator, dots, tupletPlayed, tupletInTimeOf) * 60) /
      finite(bpm, Number.MIN_VALUE, 1000),
    Number.MIN_VALUE,
  );
}
