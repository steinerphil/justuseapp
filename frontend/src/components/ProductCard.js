import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from "react-router-dom";

export default function ProductCard({product: {id, title, price, available, image}}) {
    const history = useHistory()


    return (
        <ImageListItem
            key={image.url}
            sx={{
                minWidth: 235,
                maxWidth: 370,
                height: "fit-content",
                boxSizing: "border-box",
                border: "1px solid lightgrey"
            }}
            style={{height: "fit-content"}}
            onClick={() => history.push(`/products/details/${id}`)}>
            <img
                src={image.url}
                srcSet={image.url}
                alt={title}
                loading="lazy"
                id={image.id}
            />
            <ImageListItemBar
                title={title}
                subtitle={"ab " + price + "€"}
                actionIcon={
                    <>
                        <InfoIcon
                            sx={{
                                color: available ? 'rgba(85,227,38,0.6)' : 'rgba(250,143,21,0.8)',
                                marginRight: "10px"
                            }}
                            aria-label={`info about ${title}`}
                        >

                        </InfoIcon>
                    </>
                }
            />
        </ImageListItem>
    )
}