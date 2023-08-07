import { reactive } from 'vue'
import { printable } from './models/Printable.js'
import { Order } from './models/Order.js'
import { Color } from './models/Color.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {Order[]} */
  orders: [],
  activeOrder: null,

  printables: [
    new printable('Classic Dragon', 'ClassicDragon.png', 10, 73.32),
    new printable('Poison Dragon', 'PoisonDragon.png', 20, 169.81),
    new printable('Gemstone Dragon', 'GemstoneDragon.png', 10, 92.59),
    new printable('Ancient Dragon', 'AncientDragon.png', 10, 88.11),
    new printable('Wishing Dragon', 'WishingDragon.png', 10, 90.06),
    new printable('Rex Dragon', 'RexDragon.png', 10, 113.96),
    new printable('Oslo', 'Oslo.png', 15, 150),
    new printable('Bingus', 'Bingus.png', 15, 45.37),
    new printable('Skull Cup', 'SkullCup.png', 25, 370.87),
    new printable('Geometric Succulent Planter', 'Geometric Succulant Planter.png', 10, 41.26),
    // new printable('Large Spiral Planter', 'Large Spiral Planter.png', 15),
    new printable('Lined Planter', 'Lined Planter.png', 15, 199.73),
    new printable('Oval Succulent Planter', 'Oval Succulant Planter.png', 10, 37.33),
    new printable('Spiral Planter', 'Spiral Planter.png', 15, 158.14),
    new printable('Waffle Planter', 'Waffle Planter.png', 15, 190.78),
    new printable('Waffle Succulent Planter', 'Waffle Succulant Planter.png', 10, 65.12),
    new printable('Slim Body Vase', 'Body Vase.png', 20, 118.35),
    new printable('Big Body Vase', 'Natural Body Vase.png', 20, 93.67),
    new printable('Sitting Body Vase', 'Sitting Vase.png', 20, 137.25),
    new printable('Jigglypuff', 'Jiggly.png', 5, 14)
  ],
  colors: [
    new Color({ name: '✨Galactic Purple', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Sakura Pink', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Midnight Blue', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Ice Blue', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '🌠Silver', kgPrice: 27, manufacturer: 'hatchbox' }),
    new Color({ name: '🌠Gold', kgPrice: 27, manufacturer: 'hatchbox' }),
  ]

})
