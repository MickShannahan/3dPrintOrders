


export class Color {
  constructor({ name, kgPrice, manufacturer }) {
    this.name = name
    this.kgPrice = kgPrice
    this.manufacturer = manufacturer
    this.gPrice = kgPrice / 1000
  }

}
