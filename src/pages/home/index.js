import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from './components/header';
import Tabelas from './components/tabelas';
import Navbar from './components/navbar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
    
});

function Home(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <Navbar />
                        <Tabelas />
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default Home;