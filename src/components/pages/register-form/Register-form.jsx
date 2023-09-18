import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import {
    Dialog,
    DialogActions,
    DialogContent,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';
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

export default function SignUp() {
    const [openDialog, setOpenDialog] = useState(false);
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const { handleSubmit, handleChange, values, setFieldValue, errors, setFieldTouched, touched } =
        useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordRepet: '',
                validation: false
            },
            validationSchema: Yup.object({
                firstName: Yup.string().required('El nombre es obligatorio'),
                lastName: Yup.string().required('El apellido es obligatorio'),
                email: Yup.string().email('Email inválido').required('El email es obligatorio'),
                password: Yup.string().required('La contraseña es obligatoria'),
                passwordRepet: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
                    .required('Repetir la contraseña es obligatorio'),
            }),
            onSubmit: (data) => {
                // setIsSubmitting(true);
                setOpenDialog(true);
                axios.post("http://localhost:3000/users", data)
                    .then(res => console.log(res.status))
                    .catch((errors) => console.error(errors))
                console.log(data);
            }
        });

    const handleFieldBlur = (event) => {
        const { name } = event.target;
        setFieldTouched(name, true, false); // Desactivar validación en tiempo real
    };

    return (
        <Container component="main" maxWidth="sm" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h3" color="primary" >
                    Formulario De Registro
                </Typography>
                <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                    {/* <Box sx={{ mt: 3 }}> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                label="Nombre"
                                fullWidth
                                autoFocus
                                onBlur={handleFieldBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                error={touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                label="Apellido"
                                fullWidth
                                onBlur={handleFieldBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                error={touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                label="Email"
                                fullWidth
                                type='email'
                                onBlur={handleFieldBlur}
                                onChange={handleChange}
                                value={values.email}
                                error={touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                label="Contraseña"
                                fullWidth
                                type="password"
                                onBlur={handleFieldBlur}
                                onChange={handleChange}
                                value={values.password}
                                error={touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="passwordRepet"
                                label="Repita su Contraseña"
                                fullWidth
                                type="password"
                                onChange={handleChange}
                                value={values.passwordRepet}
                                error={touched.passwordRepet && !!errors.passwordRepet}
                                helperText={touched.passwordRepet && errors.passwordRepet}
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrarse
                    </Button>
                </form>
            </Box>
            <Dialog open={openDialog} onClose={() => navigate("/")}>
                <DialogContent>
                    <Typography>
                        ¡Gracias por registrarte! Tu registro se ha completado con éxito.
                    </Typography>
                </DialogContent>
                <DialogActions>

                    <Button onClick={() => { setOpenDialog(false); navigate("/") }} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container >
    );
}