import { isWhitespace } from './isWhitespace';

export function isWhitespaceString(s: string): boolean {
  for (let i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }
  return true;
}
