
export function isWhitespace(s: string, index: number): boolean {
  const ch = s[index];
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}
