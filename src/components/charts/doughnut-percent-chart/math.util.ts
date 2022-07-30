export class MathUtil {
 /**
  * degree to radian
  * @param deg degree
  */
 static degreeToRadian(deg: number): number {
  return deg * (Math.PI / 180);
 }

 /**
  * radian to degree
  * @param rad radian
  */
 static radianToDegree(rad: number): number {
  return rad * (180 / Math.PI);
 }

 /**
  * return percent as radian
  * @param percent percent from `0` to `100`
  */
 static getRadianPercent(percent: number): number {
  return this.degreeToRadian(360 * (percent / 100));
 }

 /**
  * get coordinates for point on arc
  * @param cx arc center x
  * @param cy arc center y
  * @param r radius
  * @param angle angle in degree
  */
 static getArcPointCoordinates(
  cx: number,
  cy: number,
  r: number,
  angle: number
 ): [number, number] {
  const rad = this.degreeToRadian(angle);

  return [cx + Math.cos(rad) * r, cy + Math.sin(rad) * r];
 }
}
