import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({product: {price, title, isAvailable}}) {

    return (


    <Card sx={{ width: 232, height: "fit-content", flexShrink: 0, margin: "2% 0 0 2%" }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://res.cloudinary.com/dlxgg8z5j/image/upload/v1636193241/sample.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               ab {price.toFixed(2)} € p.M.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Verfügbarkeit: {isAvailable ? "Verfügbar" : "derzeit vermietet"}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    )

}