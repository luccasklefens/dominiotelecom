import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import { Button, ListSubheader } from '@mui/material';

const useStyles = makeStyles ((theme) => ({
    root: {
        padding: 16,
        width: 275
    },
    button: {
        width: '100%',
    }
}));

function Navbar(){

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <ListSubheader>
                <Button variant= "outlined" className={classes.button}>Vendedor</Button>
                <Button variant= "outlined" className={classes.button}>BKO</Button>
            </ListSubheader>
        </Paper>
    )
}

export default Navbar;