import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardData({ title, price, description, category ,image}) {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{ height: 200,width:350 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{price}</Button>
            </CardActions>
        </Card>
    );
}
