export interface Player {
  squad_number: number | undefined
  name: string
  country: string | undefined
  role: string
  position: string
  photo: string
}

export const players: Player[] = [
  {
    squad_number: 1,
    name: 'Mavie',
    country: 'Philippines',
    role: 'Defence',
    position: 'Goalkeeper',
    photo: '/images/player/mavie.webp',
  },
  {
    squad_number: 2,
    name: 'Dee',
    country: 'Philippines',
    role: 'Attack',
    position: 'Forward',
    photo: '/images/player/dee.webp',
  },
  {
    squad_number: 3,
    name: 'Pinoy',
    country: 'Philippines',
    role: 'Defence',
    position: 'Forward',
    photo: '/images/player/pinoy.webp',
  },
  {
    squad_number: 4,
    name: 'JM',
    country: 'Philippines',
    role: 'Attack',
    position: 'Forward',
    photo: '/images/player/jm.webp',
  },
  {
    squad_number: 6,
    name: 'Hamzy',
    country: 'Singapore',
    role: 'Defence',
    position: 'Midfielder',
    photo: '/images/player/hamzy.webp',
  },
  {
    squad_number: 8,
    name: 'Po',
    country: 'Brazil',
    role: 'Attack',
    position: 'Midfielder',
    photo: '/images/player/po.webp',
  },
  {
    squad_number: 9,
    name: 'Arianne',
    country: 'Philippines',
    role: 'Attack',
    position: 'Forward',
    photo: '/images/player/arianne.webp',
  },
]