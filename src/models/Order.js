import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"

export class Order {
  constructor(data) {
    this.id = data.id || data._id
    this.customer = data.customer || 'none'
    this.paid = data.paid ? data.paid : false
    this.qty = data.qty || 1
    this.model = data.model
    this.color = data.color
    this.picture = data.picture
    this.cost = data.cost
    this.customRequest = data.customRequest || ''
    this.price = data.price
    this.status = data.status || 'in-queue'
    this.kgUsed = data.kgUsed || 1
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get printable() {
    return AppState.printables.find(p => p.name == this.model) || AppState.printables[0]
  }

  get filament() {
    return AppState.colors.find(c => c.name == this.color) || AppState.colors[0]
  }

  get materialCost() {
    let cost = this.filament.gPrice * this.printable.gUsed
    return cost
  }

  get powerCost() {
    let cost = this.printable.printTime * AppState.powerCostPerMin
    return cost
  }

  get wearCost() {
    let cost = this.printable.printTime * AppState.wearCostPerMin
    return cost
  }
  get orderedAgo() {
    return timeAgo(this.createdAt)
  }

  get updatedAgo() {
    return timeAgo(this.updatedAt)
  }
}

function timeAgo(date) {

  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " d";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " h";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " m";
  }
  return Math.floor(seconds) + " s";
}
