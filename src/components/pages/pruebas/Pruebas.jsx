import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
    IconButton
} from '@mui/material';
import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignInSide() {
    const navigate = useNavigate()

    const [mensaje, setMensaje] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userEmail = data.get('email');
        const userPassword = data.get('password');

        try {

            const response = await axios.get(`http://localhost:3000/users?email=${userEmail}`);
            const user = response.data[0]; // 

            if (user && user.password === userPassword) {
                console.log('El usuario existe y la contraseña es correcta.');
                navigate("/home")
                //camino feliz
            } else {
                setMensaje("Los datos ingresados son incorrectos")
                setTimeout(() => {
                    setMensaje('');
                }, 3000);
                console.log('Los datos ingresados son incorrectos');
            }
        } catch (error) {
            console.error('Error al verificar el usuario:', error);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container component="main" sx={{ height: '100vh', textAlign: 'center' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            // margin="normal"
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoFocus
                        />
                        <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ingresar
                        </Button>
                        <Button
                            type="buttom"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => { navigate("/formulario") }}
                        >
                            Registrarse
                        </Button>
                        {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
                        {/* <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid> */}
                        {/* <Copyright sx={{ mt: 5 }} /> */}
                    </Box>
                </Box>
            </Grid>
        </Grid>

    );
}