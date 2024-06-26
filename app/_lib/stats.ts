export interface Stats {
  player: number | undefined
  record: number[]
}

export const stats: Stats[] = [
  {
    player: 1,
    record: [1, 1, 0, 0, 1, 0, 1]
  },
  {
    player: 2,
    record: [1, 1, 0, 0, 1, 0, 0]
  },
  {
    player: 3,
    record: [1, 1, 0, 0, 1, 0, 0]
  },
  {
    player: 4,
    record: [1, 0, 1, 1, 1, 1, 1]
  },
  {
    player: 6,
    record: [1, 1, 1, 1, 0, 0, 1]
  },
  {
    player: 8,
    record: [1, 1, 1, 0, 0, 1, 1]
  },
  {
    player: 9,
    record: [1, 1, 1, 1, 0, 0, 1]
  },
]