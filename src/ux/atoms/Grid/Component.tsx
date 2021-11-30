import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { CSSJustify, IProps, MultiDimensonal } from 'utils/Types';
import { MediaSizes } from 'utils/Types';

export interface Props extends Omit<IProps, 'cols'|'rows'> {
  container?: boolean;
  item?: boolean;

  rows?: string | MultiDimensonal;
  cols?: string | MultiDimensonal;

  gap?: GapType;
  rowGap?: GapType;
  colGap?: GapType;
  col?: RowColSplit | IRCM;
  row?: RowColSplit | IRCM;
  areas?: string | MultiDimensonal;
  alignItems?: CSSJustify;

  name?: string;
  inline?: boolean;
}

export const Grid: React.FC<Props> = (props) => {
  const classes = useStyles(props);

   return (
    <div 
      style={props.style}
      className={[
        props.className, 
        classes.root, 
        props.container ? classes.container : classes.item].join(' ')}
    >
      {props.children}
    </div>
  );
}

// design 
type RuleName = 'root' | 'item' | 'container' | MediaSizes;
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    areaName: (props) => props.name ?? '',
  },
  item: props => renderItem(props, 'default'),

  container: props => ({
    height: '100%',
    display: props.inline ? 'inline-grid' : 'grid',
    gridTemplateColumns: RowCol(props, 'cols', 'default'),
    gridTemplateRows: RowCol(props, 'rows', 'default'),
    alignItems: props.alignItems,

    gridGap: props.gap,
    gridColumnGap: props.colGap,
    gridRowGap: props.rowGap,
  }),

  "@media (max-width: 1200px)": props => ({
    // Size.DesktopMax
    container: renderContainer(props, 'desktop'),
    item: renderItem(props, 'desktop'),
  }), 
  "@media (max-width: 1024px)": props => ({
    // Size.LaptopMax
    container: renderContainer(props, 'laptop'),
    item: renderItem(props, 'laptop'),
  }), 
  "@media (max-width: 768px)": props => ({
    // Size.PadMax
    container: renderContainer(props, 'pad'),
    item: renderItem(props, 'pad'),
  }), 
  "@media (max-width: 480px)": props => ({
    // Size.MobileMax
    container: renderContainer(props, 'mobile'),
    item: renderItem(props, 'mobile'),
  })
});

// types & interfaces
type RowColSplit = {
  from: number;
  to: number;
};
interface IGridItem {
  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;
};
interface IGridContainer {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
};

// Item-Row-Col-MultiDimensonal
type IRCM = MultiDimensonal<RowColSplit>;
type FT = 'from' | 'to';
type RC = 'row' | 'col';
type RCS = 'rows' | 'cols';
type Units = 'default'|'mobile'|'pad'|'laptop'|'desktop';
type GapType = string | number;

// helper functions
function FromTo(props: Props, type: RC, mode: FT, unit: Units): number | undefined {
  let rowsplit = (props[type] as RowColSplit);
  if ((props[type] as IRCM)?.default) {
    rowsplit = ((props[type] as IRCM)[unit] as RowColSplit);
  }

  if (!rowsplit) return undefined;

  return rowsplit[mode];
}

function RowCol(props: Props, type: RCS, unit: Units): string | undefined {
  if (typeof props[type] === 'string') return props[type] as string;
  if ((props[type] as MultiDimensonal)?.default) {
    return (props[type] as MultiDimensonal)[unit];
  }
}

function renderItem(props: Props, unit: Units): IGridItem {
  return {
    gridColumnStart: FromTo(props, 'col', 'from', unit),
    gridColumnEnd: FromTo(props, 'col', 'to', unit),
    gridRowStart: FromTo(props, 'row', 'from', unit),
    gridRowEnd: FromTo(props, 'row', 'to', unit),
  };
}

function renderContainer(props: Props, unit: Units): IGridContainer {
  return {
    gridTemplateColumns: RowCol(props, 'cols', unit),
    gridTemplateRows: RowCol(props, 'rows', unit),
  };
}