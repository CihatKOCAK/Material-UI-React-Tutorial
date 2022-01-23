import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'red',
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} /*direction="column"*/>
                <Grid item xs={12}>
                    <Item>xs=12</Item>
                </Grid>
                <Grid item xs={8} md={4} sm={2}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4} md={2} sm={1}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4} md={2} sm={1}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8} md={4} sm={2}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={3} md={2} sm={2}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={6} md={3} sm={1}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={3} md={3} sm={1}>
                    <Item>xs=3</Item>
                </Grid>
            </Grid>
        </Box>
    );
}