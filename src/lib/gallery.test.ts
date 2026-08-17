import { describe, expect, it } from 'vitest';
import { wrapIndex } from './gallery';

describe('wrapIndex', () => {
  it('returns 0 when the gallery is empty', () => {
    expect(wrapIndex(3, 0)).toBe(0);
    expect(wrapIndex(-1, 0)).toBe(0);
  });

  it('wraps past the last slide back to the first', () => {
    expect(wrapIndex(3, 3)).toBe(0);
    expect(wrapIndex(4, 3)).toBe(1);
  });

  it('wraps before the first slide to the last', () => {
    expect(wrapIndex(-1, 3)).toBe(2);
    expect(wrapIndex(-2, 3)).toBe(1);
  });

  it('keeps in-range indexes unchanged', () => {
    expect(wrapIndex(0, 3)).toBe(0);
    expect(wrapIndex(2, 3)).toBe(2);
  });
});
