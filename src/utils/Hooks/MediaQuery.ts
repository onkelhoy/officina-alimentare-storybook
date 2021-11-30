import { MediaDevices, MediaCompare } from 'utils/Enums';
import useSize from './Size';

export default function useMediaQuery(device: MediaDevices, compare: MediaCompare) {
  const [_compare, block] = useSize();

  return block.device === device && _compare === compare;
}
