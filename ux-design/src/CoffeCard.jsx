import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, CardMedia, IconButton } from '@mui/material';
import { Share } from '@mui/icons-material';

export default function CoffeCard(props) {
    const { avatarUrl, title, price, description, imageUrl } = props;
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={avatarUrl} />
                }
                action={
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                }
                title={title}
                subheader={price}
            />
            <CardMedia
                style={{ height: "150px" }}
                component="img"
                image={imageUrl}
            />
            <CardContent>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">BUY NOW</Button>
                <Button size="small">OFFER</Button>
            </CardActions>
        </Card>
    );
}