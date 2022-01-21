import { Button } from "@mui/material";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    buttonStyle: props => {
        return {
            color: props.cool ? "blue !important" : "red !important",
            backgroundColor: props.cool ? "orange !important" : "yellow !important",
            [theme.breakpoints.up('sm')]: {
                color: 'cyan !important',
                backgroundColor:'blue !important',
            },
        }
    },


}));
export default function App(promps) {
    const classes = useStyles(promps);
    return (
        <>
            <Button fullWidth className={classes.buttonStyle}>Small button</Button>
        </>
    )
}



