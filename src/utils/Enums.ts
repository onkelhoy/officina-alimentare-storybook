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
  Linkedin = '#0a66c2',

  BodyText = '#6c757d',
  BodyTextLight = '#dce7f1',

  Dark = 'rgb(7, 23, 78)',
  Darker = 'rgb(5, 16, 54)',
  Shadow = 'rgba(0, 0, 0, 0.15)',
  Glow = 'rgb(235, 235, 235)',
  Footer = 'black',
  HeaderBlack = "rgba(0,0,0,0.85)",
  Transparent = 'transparent',
  TransparentWhite = 'rgba(255, 255, 255, 0.85)',
}

// ===== Media =============
export enum MediaDevices {
  Mobile = 0,
  Pad = 1,
  Laptop = 2,
  Desktop = 3
}

export enum MediaCompare {
  Between = 'between',
  Smaller = 'smaller',
  Bigger = 'bigger'
}