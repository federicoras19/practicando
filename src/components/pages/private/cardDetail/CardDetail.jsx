import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { DataContext } from '../../../utils/GlobalContexts';

const CardDetail = () => {
    const { state} = useContext(DataContext)
    const [ movie, setMovie]  = useState({})
    const { id } = useParams()

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

    return (
        <div  style={{ 
            background: state.theme.background,
            color: state.theme.color,
            height:"90vh"
            }}>
            {movie ? (
                <div>
                    <h2>{movie.title}</h2>
                    <h3>en construcción...</h3>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default CardDetail
