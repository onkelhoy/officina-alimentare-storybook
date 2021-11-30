import React from 'react';

import { MediaDevices, MediaCompare } from 'utils/Enums';
import { Media } from 'utils/Constants';
import { IMediaBlock } from 'utils/Types';


export default function useSize (): [MediaCompare, IMediaBlock]  {
  const [state, setState] = React.useState<MediaCompare>(MediaCompare.Smaller);
  const [block, setBlock] = React.useState<IMediaBlock>(Media.mobile);

  function resize(ev?: UIEvent) {
    for (let i=0; i<4; i++) {
      const target = getMediaBlock(i);

      const smaller = window.innerWidth < target.min;
      const bigger = window.innerWidth > target.max;

      if (!(smaller || bigger)) {
        // its inbetween
        setStates(MediaCompare.Between, target, state, block, setState, setBlock);
      }
      if (target.device === MediaDevices.Mobile && smaller) {
        // its smaller then mobile
        setStates(MediaCompare.Smaller, target, state, block, setState, setBlock);
      }
      if (target.device === MediaDevices.Desktop && bigger) {
        // its bigger then dekstop
        setStates(MediaCompare.Bigger, target, state, block, setState, setBlock);
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize(); // also call it

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return [state, block];
}

// helper constants & variables

// helper functions
function getMediaBlock(index: number): IMediaBlock {
  switch (index) {
    case 0: return Media.mobile;
    case 1: return Media.pad;
    case 2: return Media.laptop;
    default: return Media.desktop;
  }
}

function setStates (compare: MediaCompare, target: IMediaBlock, state:MediaCompare, block: IMediaBlock, setState: (value: MediaCompare) => void, setBlock: (value: IMediaBlock) => void) {
  if (state !== compare) setState(compare);
  if (target.device !== block.device) setBlock(block);
}