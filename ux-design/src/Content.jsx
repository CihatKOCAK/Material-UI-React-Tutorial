import { Grid } from '@mui/material';
import React from 'react';
import CoffeCard from './CoffeCard';
import coffeMakerList from './constants';


function Content() {
    const getCoffeMakerCard = coffeMakerObj => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeCard {...coffeMakerObj} />
            </Grid>
        )
    }
    return (
        <Grid container spacing={2}  style={{ marginTop: "50px" }}>
            {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
        </Grid>
    )
}

export default Content;
