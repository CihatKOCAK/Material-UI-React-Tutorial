import { Grid } from '@mui/material';
import React from 'react';
import CoffeCard from './CoffeCard';


function Content() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <CoffeCard title="First Item" subtitle="$89.99" avatarSrc="https://www.bestcoffee.com.tr/wp-content/uploads/2021/10/kahve.jpg" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
        </Grid>
    )
}

export default Content;
