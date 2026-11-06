import { noteBeats, noteSeconds } from '@lp-labs/note-duration';
if (noteBeats(4, 1) !== 1.5 || noteSeconds(4, 120) !== 0.5) throw new Error('Duration');
// @ts-expect-error invalid argument must be rejected by declarations
noteBeats('4');
