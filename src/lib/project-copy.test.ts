import { describe, expect, it } from 'vitest';
import { formatProjectOutcome } from './project-copy';

describe('formatProjectOutcome', () => {
  it('returns an empty string for blank copy', () => {
    expect(formatProjectOutcome('')).toBe('');
    expect(formatProjectOutcome('   ')).toBe('');
  });

  it('rewrites known project openers into outcome lines', () => {
    expect(formatProjectOutcome('Mobile app for medication management.')).toBe(
      'Production-ready mobile app for medication management.',
    );
    expect(formatProjectOutcome('Python Flask API + Flutter app for custom image compression.')).toBe(
      'API + mobile app system for custom image compression.',
    );
    expect(formatProjectOutcome('Campus platform for study materials.')).toBe(
      'Platform for study materials.',
    );
    expect(formatProjectOutcome('Thread-pooled real-time prediction with GUI.')).toBe(
      'High-throughput real-time prediction with GUI.',
    );
    expect(formatProjectOutcome('Enabling local language speakers to use LLMs.')).toBe(
      'Enables local language speakers to use LLMs.',
    );
    expect(formatProjectOutcome('AI-powered quiz generator from PDFs.')).toBe(
      'AI-assisted quiz generator from PDFs.',
    );
    expect(formatProjectOutcome('Mobile-first e-commerce platform.')).toBe(
      'Mobile-first product e-commerce platform.',
    );
  });

  it('leaves unrelated descriptions unchanged aside from trim', () => {
    expect(formatProjectOutcome('  A high-frequency market monitoring system.  ')).toBe(
      'A high-frequency market monitoring system.',
    );
  });
});
