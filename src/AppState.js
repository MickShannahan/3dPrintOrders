import { reactive } from 'vue'
import { printable } from './models/Printable.js'
import { Order } from './models/Order.js'
import { Color } from './models/Color.js'
import { loadState } from './utils/Store.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {Order[]} */
  orders: [],
  activeOrder: null,
  metadata: loadState('metadata', Object),
  powerCostPerMin: .0002625,
  wearCostPerMin: .012,

  printables: [
    new printable('Classic Dragon', 'ClassicDragon.png', 10, 73.32, 4.75),
    new printable('Poison Dragon', 'PoisonDragon.png', 20, 169.81, 11),
    new printable('Gemstone Dragon', 'GemstoneDragon.png', 10, 92.59, 4),
    new printable('Ancient Dragon', 'AncientDragon.png', 10, 88.11, 7.25),
    new printable('Wishing Dragon', 'WishingDragon.png', 10, 90.06, 6.45),
    new printable('Rex Dragon', 'RexDragon.png', 10, 113.96, 7.5),
    new printable('War Dragon', 'WarDragon.png', 10, 83.43, 4.45),
    new printable('Oslo', 'Oslo.png', 15, 150, 10.25),
    new printable('Bingus', 'Bingus.png', 10, 45.37, 2.7),
    new printable('Beardie', 'Beardie.png', 15, 93.34, 5.1),
    new printable('Axolotl', 'Axolotl.png', 15, 106.53, 5.5),
    new printable('Ball Python', 'BallPython.png', 10, 75.58, 5.95),
    new printable('Skull Cup', 'SkullCup.png', 25, 370.87),
    new printable('Geometric Succulent Planter', 'Geometric Succulant Planter.png', 10, 41.26),
    // new printable('Large Spiral Planter', 'Large Spiral Planter.png', 15),
    new printable('Lined Planter', 'Lined Planter.png', 17, 199.73),
    new printable('Oval Succulent Planter', 'Oval Succulant Planter.png', 10, 37.33),
    new printable('Spiral Planter', 'Spiral Planter.png', 15, 158.14),
    new printable('Waffle Planter', 'Waffle Planter.png', 17, 190.78),
    new printable('Waffle Succulent Planter', 'Waffle Succulant Planter.png', 10, 65.12),
    new printable('Slim Body Vase', 'Body Vase.png', 15, 118.35),
    new printable('Big Body Vase', 'Natural Body Vase.png', 15, 93.67),
    new printable('Sitting Body Vase', 'Sitting Vase.png', 15, 137.25),
    new printable('Jigglypuff', 'Jiggly.png', 5, 14)
  ],
  colors: [
    new Color({ name: '✨Galactic Purple', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Sakura Pink', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Midnight Blue', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Ice Blue', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Jupiter Gold', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Witchy Indigo', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Minty Green', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '✨Sweet lavender', kgPrice: 36, manufacturer: 'cookie cad' }),
    new Color({ name: '🌠Silver', kgPrice: 27, manufacturer: 'hatchbox' }),
    new Color({ name: '🌠Gold', kgPrice: 27, manufacturer: 'hatchbox' }),
    new Color({ name: '🌠Iron', kgPrice: 27, manufacturer: 'hatchbox' }),
    new Color({ name: '🌈macaroon rainbow', kgPrice: 28, manufacturer: 'polymaker' }),
    new Color({ name: '🥚Black', kgPrice: 22, manufacturer: 'polymaker' }),
    new Color({ name: '🥚white', kgPrice: 22, manufacturer: 'polymaker' }),
    new Color({ name: '🥚off-white', kgPrice: 22, manufacturer: 'polymaker' }),
    new Color({ name: '🥚grey', kgPrice: 22, manufacturer: 'polymaker' }),
    new Color({ name: '❔Other', kgPrice: 25, manufacturer: 'unknown' }),
  ]

})
