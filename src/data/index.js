import items from './items.json'

export const tags = [
  {
    icon: '❤️‍🩹',
    label: 'Heilung',
    route: 'healing'
  },
  {
    icon: '🪄',
    label: 'Zauberstäbe',
    route: 'wands'
  }
]

export const healing = items.filter(({tags}) => tags.includes('Heilung'))
export const wands = items.filter(({tags}) => tags.includes('Zauberstab'))
