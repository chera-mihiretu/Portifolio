import { describe, expect, it } from 'vitest';
import { splitFeatured, uniqueIds } from './portfolio-selectors';

describe('splitFeatured', () => {
  it('treats the first item as featured and keeps the rest in order', () => {
    expect(splitFeatured(['a', 'b', 'c'])).toEqual({
      featured: 'a',
      rest: ['b', 'c'],
    });
  });

  it('returns undefined featured for an empty list', () => {
    expect(splitFeatured([])).toEqual({ featured: undefined, rest: [] });
  });
});

describe('uniqueIds', () => {
  it('drops duplicate ids while preserving first-seen order', () => {
    expect(uniqueIds(['PRJ-000', 'PRJ-001', 'PRJ-000'])).toEqual(['PRJ-000', 'PRJ-001']);
  });
});
