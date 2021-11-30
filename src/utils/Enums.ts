// https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/
export enum Size {
  MobileMin = 320,
  MobileMax = 480,
  PadMin = 481,
  PadMax = 768,
  LaptopMin = 769,
  LaptopMax = 1024,
  DesktopMin = 1025,
  DesktopMax = 1200
}

export enum Color {
  White = 'white',
  Black = 'black',
  Gray = '#444',
  Blue = 'rgb(22, 74, 245)',

  BodyText = '#6c757d',

  Dark = 'rgb(7, 23, 78)',
  Darker = 'rgb(5, 16, 54)',
  Shadow = 'rgba(0, 0, 0, 0.15)',
  Glow = 'rgb(235, 235, 235)',
  Footer = 'black',
  Transparent = 'transparent',
  TransparentWhite = 'rgba(255, 255, 255, 0.85)',
}

// ===== Media =============
export enum MediaDevices {
  Mobile = 'mobile',
  Pad = 'pad',
  Laptop = 'laptop',
  Desktop = 'desktop'
}

export enum MediaCompare {
  Between,
  Smaller,
  Bigger
}