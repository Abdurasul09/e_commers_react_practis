import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {addToFavorite} from "../../../redux/actions/CatalogAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "@mui/material";

export default function ImgMediaCard({product}) {
    const dispatch = useDispatch()
    const {rates, based} = useSelector(state => state.catalog)

    const currency = {
        USD: "$",
        RUB: "₽",
        SOM: "KGS",
        EUR: "€"
    }
    return (
        <Card sx={{ maxWidth: 360 }}>
            <CardActions>
                {
                    <Link to={`/${product.id}`}>
                        <img src={product.image} alt="img" className='w-100 h-75' style={{height: "200"}}/>
                    </Link>
                }
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title.substr(0,20)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description.substr(0, 30)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <i className="far fa-heart"
                   onClick={() => dispatch(addToFavorite(product))}
                />
            </CardActions>
        </Card>
    );
}
