import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    color: 'rgb(41, 100, 19)',
    backgroundColor: '#fff',
    border: '3px solid rgb(41, 100, 19)',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

   return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Lógica de Programação
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Introdução à Lógica para codar
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Básico
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="Módulo">01</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}