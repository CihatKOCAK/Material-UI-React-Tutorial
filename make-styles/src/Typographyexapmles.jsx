import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Typography } from '@mui/material';

const useStyle = makeStyles({
    typographyStyle: {
        color: "blue",
    },
    gutterBottom:{
        marginBottom: '0.2em'
    }
})

export default function Typographyexapmles() {
    const classes = useStyle()
    return (
        <Typography 
        //className={classes.typographyStyle}
        //fontFamily="sans-serif"
        //fontSize='8em'
        align='center'
        //color='secondary'
        //gutterBottom
        //classes={{ gutterBottom: classes.gutterBottom }}
        variant='h1'
        color='secondary'
        >
            xx
        </Typography>
    );
}
