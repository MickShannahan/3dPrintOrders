import { AppState } from "../AppState.js"
import { Order } from "../models/Order.js"
import { api } from "./AxiosService.js"



class OrdersService {
  async getOrders() {
    const res = await api.get('')
    AppState.orders = res.data.reverse().map(d => new Order(JSON.parse(d.json), d._id))
  }

  async createOrder(order) {
    const res = await api.post('', { json: JSON.stringify(order) })
    AppState.orders.unshift(new Order(JSON.parse(res.data.json), res.data._id))
  }

  async updateOrder(order) {
    console.log(order)
    const res = await api.put('/' + order.id, { json: JSON.stringify(order) })
    const index = AppState.orders.findIndex(o => o.id == order.id)
    AppState.orders.splice(index, 1, order)
  }

  async deleteOrder(id) {
    const res = await api.delete('/' + id)
    const index = AppState.orders.findIndex(o => o.id == id)
    AppState.orders.splice(index, 1)
  }
}

export const ordersService = new OrdersService()
