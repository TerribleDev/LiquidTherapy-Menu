import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { beers } from "./beers.js";
import Card from './Card.js';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
export default function Table() {
  const styles = useStyles();
  console.log(styles);
  const cards = beers
    .filter(i => i.inHouse)
    .map((i, index) => (
      <Card key={`${i.name}-${index}`} number={index + 1} {...i} />
    ));
  return (
    <div className={styles.container}>
      {cards}
    </div>
  );
}
