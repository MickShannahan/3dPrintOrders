function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
const seconds = 1000
const minutes = 60 * seconds
const hours = 60 * seconds

export class printable {
  /**
   *
   * @param {string} name name of model
   * @param {string} picture file path
   * @param {number} cost base charge of model
   * @param {number} gUsed filament grams used
   * @param {number} printTime set in hours, returned in minutes
   */
  constructor(name, picture, cost, gUsed, printTime = 7 * hours) {
    this.id = uuid()
    this.name = name
    this.picture = picture
    this.cost = cost
    this.gUsed = gUsed || 0
    this.printTime = printTime / minutes
  }
}
