export class Order {
  constructor(data, id) {
    this.id = data.id || data._id || id
    this.customer = data.customer || 'none'
    this.qty = data.qty || 1
    this.model = data.model
    this.color = data.color
    this.picture = data.picture
    this.cost = data.cost
    this.customRequest = data.customRequest || ''
    this.price = data.price
    this.status = data.status || 'in-queue'
  }
}
