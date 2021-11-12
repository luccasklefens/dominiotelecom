import React from 'react';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@mui/material/Avatar';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
       marginRight: 10
    },
    bell: {
        marginRight: 10
    }
});

function Header(){
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Nova venda
                    </Button>
                <div className={classes.button}></div>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Luccas Klefens" src="" />
                </div>
                 {/* <div>
                    <span>Domínio Telecom</span>
                </div>
                <div>
                    <span>img 1</span>
                    <span>img 2</span>
                </div>  */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;