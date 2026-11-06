# @lp-labs/note-duration

Notated note values, dots and tuplets in quarter-note beats.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/note-duration
```

## Working example

```js
import { noteBeats, noteSeconds } from '@lp-labs/note-duration';
if (noteBeats(4, 1) !== 1.5 || noteSeconds(4, 120) !== 0.5) throw new Error('Duration');
```

CommonJS: `const api = require('@lp-labs/note-duration')`.

## Behavior, customization and limits

noteBeats(denominator,dots=0,tupletPlayed=1,tupletInTimeOf=1) denominator powers1..1024 (1 whole,4 quarter), dots0..4; tuplets integer1..64. result=(4/denominator)*(2-2^-dots)*inTimeOf/played. noteSeconds uses positive finite BPM<=1000. O(1), no meter inference, quantization or audio.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function noteBeats(
  denominator: number,
  dots?: number,
  tupletPlayed?: number,
  tupletInTimeOf?: number,
): number;
export declare function noteSeconds(
  denominator: number,
  bpm: number,
  dots?: number,
  tupletPlayed?: number,
  tupletInTimeOf?: number,
): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
