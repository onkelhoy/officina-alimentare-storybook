import React from 'react';
import { MediaDevices, Size } from "./Enums";

export type MediaMobile = `@media (max-width: ${Size.MobileMax}px)`;
export type MediaPad = `@media (max-width: ${Size.PadMax}px)`;
export type MediaLaptop = `@media (max-width: ${Size.LaptopMax}px)`;
export type MediaDesktop = `@media (max-width: ${Size.DesktopMax}px)`;
export type MediaSizes = MediaDesktop|MediaLaptop|MediaPad|MediaMobile;

export type CSSJustify = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-evenly' | 'space-between'
export type CSSDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse' | 'revert';
export type Languages = 'it'|'en';

export interface IMediaBlock {
  min: number;
  max: number;
  unit: number;
  device: MediaDevices;
}

export interface IMedia {
  mobile: IMediaBlock;
  pad: IMediaBlock;
  laptop: IMediaBlock;
  desktop: IMediaBlock;
}

export interface IProps<T = HTMLElement> extends React.HTMLProps<T> {
  className?: string;
  style?: React.CSSProperties;
}

export interface iImage {
  src: string;
  alt: string;
}

export interface MultiDimensonal<T = string> {
  default: T;
  mobile?: T;
  pad?: T;
  laptop?: T;
  desktop?: T;
};

export interface Dimensions<T = number> {
  width: T;
  height: T;
}

export interface Position<T = number> {
  x: T;
  y: T;
}