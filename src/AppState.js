import { reactive } from 'vue'
import { printable } from './models/Printable.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  orders: [],

  printables: [
    new printable('Classic Dragon', 'ClassicDragon.png', 10),
    new printable('Poison Dragon', 'PoisonDragon.png', 20),
    new printable('Gemstone Dragon', 'GemstoneDragon.png', 10),
    new printable('Ancient Dragon', 'AncientDragon.png', 10),
    new printable('Wishing Dragon', 'WishingDragon.png', 10),
    new printable('Rex Dragon', 'RexDragon.png', 10),
    new printable('Jigglypuff', 'Jiggly.png', 10),
    new printable('Bingus', 'Bingus.png', 15)
  ],
  colors: [
    '✨Galactic Purple',
    '✨Midnight Blue',
    '✨Sakura Pink',
    '✨Ice Blue',
    '🌠Silver',
    '🌠Gold'
  ]

})
