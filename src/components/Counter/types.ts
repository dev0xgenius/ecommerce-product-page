export interface Counter {
  value: number,
  onCount: (count: number) => void
}

export enum CountDirection {
  up = 1,
  down = -1
}