/**
 * @return xx.xxKB xx.xxM
 */
export function formatSize(bytes?: number, numDigits: number = 1): string {
  if (bytes === null || bytes === undefined) return '';
  const base = 10 ** numDigits;

  if (bytes > 1024 * 1024) {
    return `${Math.floor(bytes / 1024.0 / 1024 * base) / base}M`
  }
  return `${Math.floor(bytes / 1024 * base) / base}KB`
}
