export interface Counter {
  value: number,
  onCount: (count: number) => void
}

export enum CountDirection {
  UP = 1,
  DOWN = -1
}