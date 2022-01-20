import { AppBar, Toolbar, Typography } from "@mui/material";
import { AcUnitRounded } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles(()=>({
typographtStyles:{
    flex: 1,
}
}));

const Header = () => {
    const classes = useStyles();
    return <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographtStyles}>This is our header</Typography>
            <AcUnitRounded />
        </Toolbar>
    </AppBar>
}

export default Header;