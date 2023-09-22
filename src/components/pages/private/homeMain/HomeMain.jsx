import { useContext } from 'react';
import { DataContext } from "../../../utils/GlobalContexts";
import { Button } from "@mui/material";
import Cards from "../../../common/card/Cards";




const HomeMain = () => {
    const { state } = useContext(DataContext)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: state.theme.background
        }}>
            <Cards />
            <Button variant="contained">Ver más</Button>
        </div>);
};

export default HomeMain;

