import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { CSSJustify, IProps, MultiDimensonal } from 'utils/Types';
import { GetMediaType, Units } from 'utils/Types';
import { AppContext } from 'AppContext';

export const Grid: React.FC<Props> = (props) => {
  const { windowWidth } = React.useContext(AppContext);
  const classes = useStyles({ ...props, windowWidth });

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

interface CSSProps extends Props {
  windowWidth: number;
}

// design 
type RuleName = 'root' | 'item' | 'container';
const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: {
    areaName: (props) => props.name ?? '',
  },
  item: props => renderItem(props, GetMediaType(props.windowWidth)),

  container: props => ({
    height: '100%',
    display: props.inline ? 'inline-grid' : 'grid',
    gridTemplateColumns: RowCol(props, 'cols', GetMediaType(props.windowWidth)),
    gridTemplateRows: RowCol(props, 'rows', GetMediaType(props.windowWidth)),
    alignItems: props.alignItems,

    gridGap: props.gap,
    gridColumnGap: props.colGap,
    gridRowGap: props.rowGap,
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

// Item-Row-Col-MultiDimensonal
type IRCM = MultiDimensonal<RowColSplit>;
type FT = 'from' | 'to';
type RC = 'row' | 'col';
type RCS = 'rows' | 'cols';
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
    return (props[type] as MultiDimensonal)[unit] || (props[type] as MultiDimensonal)?.default;
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