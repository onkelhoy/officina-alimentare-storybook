import { MediaDevices, MediaCompare } from 'utils/Enums';
import { useMediaSize } from './MediaSize';

export function useMediaQuery(device: MediaDevices, compare: MediaCompare) {
  const [_compare, block] = useMediaSize();

  if (block.device !== device) {
    if (compare === MediaCompare.Smaller) {
      return device > block.device;
    }
    if (compare === MediaCompare.Bigger) {
      return device < block.device;
    }
  }
  else {
    return _compare === MediaCompare.Between;
  }

  return false;
}
