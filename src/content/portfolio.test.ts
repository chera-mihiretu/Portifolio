import { describe, expect, it } from 'vitest';
import {
  achievements,
  education,
  expertiseBar,
  person,
  projects,
  skillCategories,
  testimonials,
} from './portfolio';
import { uniqueIds } from '@/lib/portfolio-selectors';

describe('portfolio content', () => {
  it('identifies the site owner and featured product', () => {
    expect(person.name).toBe('Chera Mihiretu');
    expect(person.title.length).toBeGreaterThan(0);
    expect(person.identitySentence.length).toBeGreaterThan(20);
    expect(person.featured.name).toBe('8D Audio Experience');
    expect(person.featured.url.startsWith('https://')).toBe(true);
  });

  it('keeps project ids unique and every project reviewable offline', () => {
    const ids = projects.map((project) => project.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(uniqueIds(ids)).toEqual(ids);

    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(0);
      expect(project.status.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.images.length).toBeGreaterThan(0);
      expect(project.images.every((src) => src.startsWith('/'))).toBe(true);
    }
  });

  it('lists expertise, skills, education, and achievements without empty rows', () => {
    expect(expertiseBar.length).toBeGreaterThan(0);
    expect(skillCategories.every((category) => category.skills.length > 0)).toBe(true);
    expect(education.every((item) => item.institution && item.degree)).toBe(true);
    expect(achievements.every((item) => item.title && item.position)).toBe(true);
  });

  it('stores self-contained testimonials with 1-5 star ratings', () => {
    expect(testimonials.length).toBeGreaterThan(0);
    for (const review of testimonials) {
      expect(review.name.length).toBeGreaterThan(0);
      expect(review.quote.length).toBeGreaterThan(0);
      if (review.rating !== undefined) {
        expect(review.rating).toBeGreaterThanOrEqual(1);
        expect(review.rating).toBeLessThanOrEqual(5);
      }
    }
  });
});
