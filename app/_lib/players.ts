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
    country: 'PH',
    role: 'Defence',
    position: 'Goalkeeper',
    photo: '/images/players/player.webp',
  },
  {
    squad_number: 2,
    name: 'Dee',
    country: 'PH',
    role: 'Attack',
    position: 'Forward',
    photo: '/images/players/player.webp',
  },
  {
    squad_number: 3,
    name: 'Pinoy',
    country: 'PH',
    role: 'Defence',
    position: 'Forward',
    photo: '/images/players/player.webp',
  },
  {
    squad_number: 4,
    name: 'JM',
    country: 'PH',
    role: 'Attack',
    position: 'Forward',
    photo: '/images/players/player.webp',
  },
  {
    squad_number: 6,
    name: 'Hamzy',
    country: 'SG',
    role: 'Defence',
    position: 'Midfielder',
    photo: '/images/players/player.webp',
  },
  {
    squad_number: 8,
    name: 'Po',
    country: 'BR',
    role: 'Attack',
    position: 'Midfielder',
    photo: '/images/players/player.webp',
  },
  {
    squad_number: 9,
    name: 'Arianne',
    country: 'PH',
    role: 'Attack',
    position: 'Forward',
    photo: '/images/players/player.webp',
  },
]