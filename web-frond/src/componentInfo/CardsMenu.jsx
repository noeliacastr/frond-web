
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import '../App.css';

const CardMenu = ({ title, description, price, imageUrl }) => {
    return (
        <>

            <Card sx={{ maxWidth: 250 }} className="card-container">
                <CardContent className='card-image'>
                    <img src={imageUrl} alt={title} />
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Price: ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Book now</Button>
                    <Button size="small">More Info</Button> */}
                </CardActions>
            </Card>

        </>
    );
}

export default CardMenu;
