import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';

export default function ProductCard({product: {title, price, available, image:{url}}}) {



    return (
            <ImageListItem key={url} sx={{ minWidth: 235, height: "fit-content"}} style={{height: "fit-content"}}>
                <img
                    src={`${url}?w=248&fit=crop&auto=format`}
                    srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={title}
                    subtitle={"ab " + price +"€"}
                    actionIcon={
                        <>
                        <InfoIcon
                            sx={{
                                color: available? 'rgba(85,227,38,0.6)' : 'rgba(250,143,21,0.8)',
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