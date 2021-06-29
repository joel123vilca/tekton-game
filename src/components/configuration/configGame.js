import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  }
}));

const ConfigGame = () => {
  const classes = useStyles();
  let history = useHistory();

  const { addLevel } = useContext(GlobalContext);

  const nextGame = (title, value) => {
    addLevel({title, value});
    history.push("/game-board");
  };
  
  return(
    <>
      <div className={classes.root}>
        <h3>Select Level</h3>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Button 
              variant="contained"
              onClick={() => {
                nextGame('easy', 150);
              }}
            >Easy</Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => {
                nextGame('medium', 100);
              }}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained"
              color="secondary"
              onClick={() => {
                nextGame('hard', 50);
              }}
            >
              Hard
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ConfigGame;