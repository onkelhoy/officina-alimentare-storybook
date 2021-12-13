import { useMediaSize } from './MediaSize';

export function usePrintSize(...params: number[]): string {
  const [_compare, block] = useMediaSize();

  return params.map(n => `${n * block.unit}rem`).join();
}