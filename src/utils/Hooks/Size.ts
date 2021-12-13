import React from 'react';

interface ISize {
  width: number;
  height: number;
}
export function useSize (ref?: Element): ISize  {
  const [size, setSize] = React.useState<ISize>({ width: 0, height: 0 });
  const ro: ResizeObserver = new ResizeObserver(entries => {
    const [target] = entries; // always 1 element
    setSize(target.contentRect)
  });

  React.useEffect(() => {
    const rootElm = window.document.documentElement;
    ro.observe(ref || rootElm as Element);

    return () => {
      ro.disconnect();
    }
  }, []);

  return size;
}
