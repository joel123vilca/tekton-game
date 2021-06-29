import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GlobalContext } from '../../context/GlobalState';
const useStyles = makeStyles({

  history: {
    display: 'flex',
    justifyContent: 'center'
  },
  table: {
    textAlign: 'center',
    maxWidth: 650,
  },
});

const History = () => {
  const classes = useStyles();
  const { plays } = useContext(GlobalContext);
    return (
      <div className={classes.history}>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Pts</TableCell>
            <TableCell align="right">level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plays.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.pts} of {20}</TableCell>
              <TableCell align="right">{item.level.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default History;