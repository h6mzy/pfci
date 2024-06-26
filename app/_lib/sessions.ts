export interface Session {
  date: string
  players: number[]
}

export const sessions: Session[] = [
  {
    date: '2024-06-22T18:00:00',
    players: [1, 4, 6, 8, 9],
  },
  {
    date: '2024-06-15T18:00:00',
    players: [4, 8],
  },
  {
    date: '2024-06-8T18:00:00',
    players: [1, 2, 3, 4],
  },
  {
    date: '2024-06-1T19:00:00',
    players: [2, 3, 4, 6, 9],
  },
  {
    date: '2024-05-25T18:00:00',
    players: [1, 2, 3, 4, 6, 8, 9],
  },
]