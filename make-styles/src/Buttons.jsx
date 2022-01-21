import { makeStyles } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import React from 'react';

const useStyles = makeStyles(theme => ({
root:{
    color: "red",
    border: "none",
}
}));
export default function Buttons() {
    const classes = useStyles();
    return (
        <>
            <Button disableRipple disableFocusRipple>blocked</Button>
            <Button classes = {{root:classes.root}}>xx</Button>
            <Grid item>
                <Button size="small" color="primary">Small</Button>
                <Button size="medium" color="secondary">Normal</Button>
                <Button size="large"  color="error" >Large</Button>
            </Grid>
        </>
    );
}
