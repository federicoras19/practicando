import { useContext } from 'react';
import { DataContext } from '../../utils/GlobalContexts';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Grid,
} from '@mui/material';

const Cards = () => {
    const { state } = useContext(DataContext)
    const { data } = state

    return (
        <Grid
            container
            spacing={2}
            padding="15px"
            justifyContent="center">
            {data.map((item) => (
                <Grid key={item.id} item xs={2.3}>
                    <Card sx={{ borderRadius: "15px" }}>
                        <Box >
                            <Link to={`/home/cardsDetail/${item.id}`}>
                                <CardMedia
                                    component="img"
                                    height="320px"
                                    image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt="green iguana"
                                />
                            </Link>
                            <CardContent sx={{
                                height: 100,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}>
                                <Link
                                    to={`/home/cardsDetail/${item.id}`}
                                    style={{ textDecoration: "none" }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        fontSize="0.8rem"
                                        component="div"
                                        fontFamily='Mooli, sans-serif'
                                        fontWeight="900"
                                        color="black">
                                        {item.title}
                                    </Typography>
                                </Link>
                                <Typography
                                    variant="small"
                                    color="text.secondary">
                                    {item.release_date}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Cards
