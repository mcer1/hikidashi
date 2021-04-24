/**
 * Gets the modulo of dividing two given NumberLikes.
 *
 * @remarks
 *
 * In most languages, ‘%’ is a remainder operator, but in some (e.g. Python, Perl) it is a modulo operator.
 * For positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 *
 * @param x - The dividend.
 * @param y - The divisor.
 * @returns number - The resulting modulo.
 */
function remainder(x: any, y: any): number {
  // eslint-disable-next-line @typescript-eslint/no-extra-parens
  return ((x % y) + x) % y;
}

export default remainder;
