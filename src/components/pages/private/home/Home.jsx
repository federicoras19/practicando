import { useContext } from 'react';
import { DataContext } from "../../../utils/GlobalContexts";
import { Button, Typography } from "@mui/material";
import Cards from "../../../common/cards/Cards";

const Home = () => {
    const { state, cargarPaginaSiguiente } = useContext(DataContext)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: state.theme.background
        }}>
            <Typography
                variant='h3'
                align='center'
                color="primary">
                Películas
            </Typography>
            <Cards />
            <Button
                variant="contained"
                onClick={cargarPaginaSiguiente}
            >Ver más</Button>
        </div>);
}

export default Home
