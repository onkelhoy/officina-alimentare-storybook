import { Size, MediaDevices } from "./Enums";
import { IMedia } from "./Types";

export const Media: IMedia = {
  mobile: {
    min: Size.MobileMin,
    max: Size.MobileMax,
    unit: 20,
    device: MediaDevices.Mobile
  },
  pad: {
    min: Size.PadMin,
    max: Size.PadMax,
    unit: 20,
    device: MediaDevices.Pad
  },
  laptop: {
    min: Size.LaptopMin,
    max: Size.LaptopMax,
    unit: 20,
    device: MediaDevices.Laptop
  },
  desktop: {
    min: Size.DesktopMin,
    max: Size.DesktopMax,
    unit: 20,
    device: MediaDevices.Desktop
  },
}