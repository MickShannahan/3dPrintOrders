


export class Color {
  constructor({ name, kgPrice, manufacturer }) {
    this.name = name
    this.kgPrice = kgPrice ?? 20
    this.manufacturer = manufacturer
    this.gPrice = kgPrice / 1000
  }

}
