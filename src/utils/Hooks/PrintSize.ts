import useSize from './Size';

export default function usePrintSize(...params: number[]): string {
  const [_compare, block] = useSize();

  return params.map(n => `${n * block.unit}rem`).join();
}