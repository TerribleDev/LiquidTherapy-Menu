import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles({
  card: {
    width: 275,
    marginRight: "1rem",
    marginBottom: "1rem"
  },
  inHouse: {
    //   backgroundColor: '#2bfc58'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  btmBox: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row"
  },
  spacer: {
    flexGrow: 1
  },
  nitro: {
    fontSize: 14,
    color: "#3f51b5"
  },
  pos: {
    marginBottom: 12
  },
  header: {
      height: '3rem'
  }
});

function SimpleCard({ name, number, inHouse, isNitro, desc, abv }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={clsx({ [classes.card]: true, [classes.inHouse]: inHouse })}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          #{number}
        </Typography>
        <Typography className={classes.header} variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>
      <div className={classes.btmBox}>
        {abv && (
          <Typography
            className={classes.nitro}
            color="textSecondary"
            gutterBottom
          >
            ABV: {abv}%
          </Typography>
        )}
        <div className={classes.spacer} />
        {isNitro && (
          <Typography
            className={classes.nitro}
            color="textSecondary"
            gutterBottom
          >
            NITRO
          </Typography>
        )}
      </div>
    </Card>
  );
}

export default SimpleCard;
