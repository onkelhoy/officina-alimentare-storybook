import React from 'react';

import { MediaDevices, MediaCompare } from 'utils/Enums';
import { Media } from 'utils/Constants';
import { IMediaBlock } from 'utils/Types';

import { useSize } from './HSize';

export function useMediaSize (): [MediaCompare, IMediaBlock]  {
  const rootsize = useSize(); // will go for root
  const [state, setState] = React.useState<MediaCompare>(MediaCompare.Smaller);
  const [block, setBlock] = React.useState<IMediaBlock>(Media.mobile);

  React.useEffect(() => {
    let compare: MediaCompare = MediaCompare.Between;
    let target: IMediaBlock|null = null;

    for (let i=0; i<4; i++) {
      target = getMediaBlock(i);

      const smaller = rootsize.width < target.min;
      const bigger = rootsize.width > target.max;

      if (!(smaller || bigger)) {
        // its inbetween so we stop
        compare = MediaCompare.Between;
        break;
      }
      if (smaller) {
        // its smaller so we stop
        if (target.device === MediaDevices.Mobile) compare = MediaCompare.Between;
        else compare = MediaCompare.Smaller;
        break;
      }
      if (bigger) {
        // its bigger so we keep going
        if (target.device === MediaDevices.Desktop) compare = MediaCompare.Between;
        else compare = MediaCompare.Bigger;
      }
    }

    if (state !== compare) setState(compare);
    if (target && target.device !== block.device) setBlock(target);
  }, [rootsize]);

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
