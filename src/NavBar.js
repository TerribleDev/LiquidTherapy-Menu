import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const styles = {
    appBar: {
      height: '7vh',
      display: 'flex',
      alignItems: 'center'
    },
  };
  
  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Liquid Therapy Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
export default withStyles(styles)(ButtonAppBar);