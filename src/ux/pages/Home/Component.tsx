import React from 'react';
import { createUseStyles } from 'react-jss';
import { MediaSizes } from 'utils/Types';


// Molecules *️⃣
import { Container } from 'ux/molecules/Container';
import { Footer } from 'ux/molecules/Footer';

// Orgamisms 🫁
import { Services } from 'ux/organisms/Services';
import { Teams } from 'ux/organisms/Teams';
import { Stories } from 'ux/organisms/Stories';
import { Portfolios } from 'ux/organisms/Portfolios';
import { Header } from 'ux/organisms/Header';
import { Slider } from 'ux/organisms/Slider';

export interface Props {
 
}

export const Home: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <Header />
      <br />
      <br />
      <Slider 
        source='/assets/images/slider/source.svg'
        overlay='/assets/images/slider/overlay.svg'
        logo='/assets/images/slider/logo.svg'
      />
      <Container className={classes.root} direction="column">
        <Services />
        <Teams />
        <Stories />
        <Portfolios />
      </Container>
      <Footer />
    </div>
  );
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    position: 'relative',
  },

  "@media (max-width: 1200px)": {
    // Size.DesktopMax
  }, 
  "@media (max-width: 1024px)": {
    // Size.LaptopMax
  }, 
  "@media (max-width: 768px)": {
    // Size.PadMax
  }, 
  "@media (max-width: 480px)": {
    // Size.MobileMax
  }
})

// types & interfaces
type RuleName = 'root' | MediaSizes;

// helper functions