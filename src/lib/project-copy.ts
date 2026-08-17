/** Short outcome line shown on project cards. */
export function formatProjectOutcome(description: string): string {
  const normalized = description.trim();
  if (!normalized) return '';
  return normalized
    .replace(/^Mobile app/i, 'Production-ready mobile app')
    .replace(/^Python Flask API \+ Flutter app/i, 'API + mobile app system')
    .replace(/^Campus platform/i, 'Platform')
    .replace(/^Thread-pooled/i, 'High-throughput')
    .replace(/^Enabling/i, 'Enables')
    .replace(/^AI-powered/i, 'AI-assisted')
    .replace(/^Mobile-first/i, 'Mobile-first product');
}
