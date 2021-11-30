import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { Color } from 'utils/Enums';

export interface Props extends IProps {
  limit: number;
  padding?: number | string;
  children: (passed: boolean) => React.ReactNode;
}

export const Scrollpass: React.FC<Props> = (props) => {
  const [passed, setPassed] = React.useState<boolean>(false);
  const classes = useStyles({ ...props, passed });
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  function handleScroll(e: Event) {
    // this is the threshold point when the header goes smaller
    let didpass = null;
    if (window.scrollY > props.limit) {
      didpass = true;
    } else {
      didpass = false;
    }
    if (didpass !== null && passed !== didpass)
      setPassed(didpass);
  };

  return (
    <div ref={ref} className={[props.className, classes.root].join(' ')}>
      {props.children(passed)}
    </div>
  );
}

// css design
const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: props => ({
    position: 'fixed',
    padding: `0 ${props.padding}`,
    top: 0,
    left: 0,
    width: '100%',
    transition: 'background-color 150ms ease-in, box-shadow 150ms ease-in',
    boxSizing: 'border-box',

    backgroundColor: props.passed ? Color.White : Color.TransparentWhite,
    boxShadow: props.passed ? `0 3px 10px ${Color.Glow}` : undefined,
  }),
})

// types & interfaces
type RuleName = 'root';
interface CSSProps extends Props {
  passed: boolean;
}

// helper functions