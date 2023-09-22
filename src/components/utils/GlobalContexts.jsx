import axios from "axios";
import { createContext, useReducer, useEffect, useState } from "react"

export const themes = {
    light: {
        background: "#b5aba9",
        color: "black",
        padding: "1vh"
    },
    dark: {
        background: "#000000",
        color: "white",
        padding: "1vh"
    }
};

const initialState = {
    theme: themes.light,
    data: []
}

const handleAction = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload };
        case "SET_THEME":
            return {
                ...state,
                theme: state.theme === themes.light ? themes.dark : themes.light,
            };
        default:
            return state
    }
}

export const DataContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(handleAction, initialState)
    const [currentPage, setCurrentPage] = useState(1);

    const cargarPaginaSiguiente = () => {
        setCurrentPage(currentPage + 1)
    }
    const toggleTheme = () => {
        dispatch({ type: 'SET_THEME' });
    };

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`;
        const config = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGMyOTJkM2UxMDI4NGE1ZTQyNGY0N2UwOTJkNTMxOSIsInN1YiI6IjY1MDliMzkwMzczYWMyMDBjNTMzYzY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYloIvMd4dHMGZWGKL7BiWeyg4yTLyIArxFPjRo0I3k`,
            },
        };
        axios
            .get(apiUrl, config)
            .then((response) => {
                dispatch({ type: "SET_DATA", payload: [...state.data, ...response.data.results] });
            })
            .catch((error) => {
                console.error('Error al obtener datos de la película:', error);
            });
    }, [currentPage]);

    return (
        <DataContext.Provider value={{ state, toggleTheme, cargarPaginaSiguiente }}>
            {children}
        </DataContext.Provider>
    )
}