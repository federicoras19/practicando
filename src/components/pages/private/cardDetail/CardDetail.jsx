import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { DataContext } from '../../../utils/GlobalContexts';
import "./CardDetail.css"

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import { CardTravelRounded } from '@mui/icons-material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardDetail = () => {
    const { state } = useContext(DataContext)
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US'`;
        const config = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGMyOTJkM2UxMDI4NGE1ZTQyNGY0N2UwOTJkNTMxOSIsInN1YiI6IjY1MDliMzkwMzczYWMyMDBjNTMzYzY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYloIvMd4dHMGZWGKL7BiWeyg4yTLyIArxFPjRo0I3k`,
            },
        };
        axios
            .get(apiUrl, config)
            .then((response) => {
                console.log(response.data);
                setMovie(response.data)
            })
            .catch((error) => {
                console.error('Error al obtener datos de la película:', error);
            });
    }, []);

    console.log(movie);
    return (
        <div style={{
            background: state.theme.background,
            color: state.theme.color,
            height: "90vh"
        }}>
            {movie ? (
                <Box className="box-container"
                    sx={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, // URL de imagen dinámica
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '100%',
                    }}>

                    <Box sx={{
                        backgroundColor: "black",
                        color: 'white',
                        height: "100%",
                        width: "100%",
                        opacity: "0.8",
                        
                    }}>
                        <img className='img-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img-poster" />
                        {movie.title}
                    </Box>
                </Box>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default CardDetail
