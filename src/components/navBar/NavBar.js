import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const startGame = () => {
    history.push('/');
  }

  const historyGame = () => {
    history.push("/history-plays");
  }
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Tekton games
          </Typography>
          <Button 
            color="inherit"
            onClick={startGame}
            >Start Game</Button>
          <Button color="inherit" onClick={historyGame}>History Game</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}