/**
 * author Henry Pap
 * created 21 Sep 2021
 * version 1
**/

import React from 'react';

// utilities
import { useTranslation } from "react-i18next";
import { createUseStyles } from 'react-jss';

// Molecules *️⃣
import { Portfolio } from 'ux/molecules/Portfolio';
import { Section } from 'ux/molecules/Section';

const Component: React.FC = props => {
  const { t } = useTranslation();

  const classes = useStyles();

  const properties: Properties = [];

  for (let i = 0; i < names.length; i++) {
    const point = getPosition(properties);
    const angle = -30 + Math.random() * 60;

    properties.push({ x: ~~point.x, y: ~~point.y, angle: ~~angle });
  }


  return (
    <Section 
      name='portfolio' 
      title={t('portfolio.title')} 
      classes={classes}
    >
      {names.map((name, index) => (
        <Portfolio name={name} key={name} {...properties[index]} />
      ))}
    </Section>
  );
}

// we need to memoize so it doesnt rerender on each update
export const Portfolios = React.memo(Component);

// styling
type RuleName = 'root' | 'body';
const useStyles = createUseStyles<RuleName, unknown, unknown>({
  root: {
    position: 'relative',
    marginBottom: '5rem',
    height: '100vh',
  },
  body: {
    position: 'absolute',
    top: '7rem',
    left: '10vw',
    width: '80vw',
    height: '90vh',
    minHeight: '200px',
  }
});


// data 
const names = [
  "Art A&amp_B Infestanti",
  "Art TA Gelato",
  "Art TA Tecnologo Alim",
  "Conv CaffÇ Firenze",
  "Conv SANA 2017",
  "Conv SANA",
  "Convegn Spreco",
  "Convegno celebrativo 40 anni Cso Dietologia PV",
  "Corso Gest Allerte",
  "Cso Medicina Univ Cattolica Roma",
  "Giornale Ilo-Ilo Filippine",
  "Laboratorio del gusto Gorgonzola",
  "Laboratorio del gusto Inzago",
  "Laboratorio del gusto Melzo",
  "Laboratorio del gusto Trezzo",
  "Laboratorio del gusto Trezzo2",
  "Laboratorio del gusto",
  "Programma Tutti nello stesso piatto",
  "Quotidiano Sikkim (India)",
  "Seminario Univ Udine",
];

// interfaces 
interface Point { x: number, y: number, angle?: number };
interface IProperty extends Point { angle: number; }
type Properties = IProperty[];

// helper functions
function getPosition(properties: Properties, times = 0): Point {
  const x = Math.random() * 100;
  const y = 25 + Math.random() * 75;

  for (let point of properties) {
    const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
    if (distance < 10) {
      return getPosition(properties, times++);
    }
  }

  return { x, y };
}