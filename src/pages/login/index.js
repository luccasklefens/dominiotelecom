import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        
    }
});

function Login(){
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div>
                Imagem
            </div>

            <div>
                Form
            </div>


        </div>
    )
}

export default Login;