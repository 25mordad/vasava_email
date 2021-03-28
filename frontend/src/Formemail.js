// Render Prop
import React , { useState, useEffect }   from 'react';
import { useFormik , Formik, Field } from 'formik';
import api from './api/index.js';
import * as yup from 'yup';
import {Button , TextField , Grid , makeStyles , Paper , Select,  MenuItem  } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { CheckboxWithLabel } from 'formik-material-ui';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = yup.object({
  firstname: yup
  .string('Enter your name')
  .min(2, 'El nombre debe tener una longitud mínima de 2 caracteres')
  .required('Introduzca un nombre'),
  lastname: yup
  .string('Enter your lastname')
  .min(2, 'El apellido debe tener un mínimo de 2 caracteres.')
  .required('Introduzca un apellido'),
  email: yup
  .string('Enter your email')
  .email('Introduzca un correo electrónico válido')
  .required('Introduzca un correo electrónico válido'),
  phone: yup
  .string('Enter your phone')
  .matches(phoneRegExp, 'El número de teléfono no es válido')
  .required('El número de teléfono no es válido'),
  salary: yup
  .string('Enter your salary')
  .required('salary is required'),
  interests: yup
  .string('Enter your interests')
  .required('interests is required'),
  interests: yup
  .string('confirm')
  .required('Confirm is required'),
});




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '90%',
    margin: theme.spacing(5),
  },
  select: {
    margin: theme.spacing(2),
  },

}));








const Formemail = () => {

  const classes = useStyles();
  const [formsubmit, setFormsubmit] = useState();



  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      salary: '',
      interests: '',
      confirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const sendData = async () => {
        const resp = await api(values);
        console.log(resp);
        setFormsubmit("Gracias, el formulario ha sido enviado.");
        formik.resetForm();
      }
      sendData();
    },
  });
  // console.log("test");

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />


          <Paper className={classes.paper}>

            <Box pt={3} >
              <Typography component="h1" variant="h5">
              Formulario de solicitud
              </Typography>
            </Box>
            <Box  m={3} >
              <Typography component="h5" variant="h5"  >
                {formsubmit}
              </Typography>
            </Box>
            <form  className={classes.form}  onSubmit={formik.handleSubmit}>
              <TextField

                variant="outlined"
                margin="normal"
                autoFocus
                fullWidth
                id="firstname"
                name="firstname"
                label="Nombre"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="lastname"
                name="lastname"
                label="Apellidos"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
              <TextField
                variant="outlined"
                margin="normal"
                autoFocus
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                autoFocus
                fullWidth
                id="phone"
                name="phone"
                label="Teléfono"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <Box pt={3} pb={1} >
                <Typography component="p" variant="p">
                Rango Salarial
                </Typography>
              </Box>
              <Select
                variant="outlined"
                margin="normal"
                autoFocus
                fullWidth
                id="salary"
                name="salary"
                label="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                error={formik.touched.salary && Boolean(formik.errors.salary)}

                >

                  <MenuItem value="Menos de 18K">Menos de 18K</MenuItem>
                  <MenuItem value="Entre 18k y 35k">Entre 18k y 35k</MenuItem>
                  <MenuItem value="Entre 35k y 55k">Entre 35k y 55k</MenuItem>
                  <MenuItem value="Más de 55k">Más de 55k</MenuItem>
              </Select>
              <Box pt={3} pb={1} >
                <Typography component="p" variant="p"  >
                Su interés y experiencia profesionales en
                </Typography>
              </Box>
              <Select
                variant="outlined"
                margin="normal"
                autoFocus
                fullWidth
                id="interests"
                name="interests"
                label="interests"
                value={formik.values.interests}
                onChange={formik.handleChange}
                error={formik.touched.interests && Boolean(formik.errors.interests)}

                >
                  <MenuItem value="Marketing">Marketing y comercio electrónico</MenuItem>
                  <MenuItem value="Software">Software y datos</MenuItem>
                  <MenuItem value="Internet">Internet y tecnología distribuida</MenuItem>
                  <MenuItem value="Otros">Otros perfiles digitales</MenuItem>
              </Select>





              <Box m={2} >
              <FormControlLabel
                control={<Checkbox value={formik.values.confirm} color="primary" onChange={formik.handleChange}
                error={formik.touched.confirm && Boolean(formik.errors.confirm)} />}
                id="confirm"
                name="confirm"
              />
                <Typography component="p" variant="p"  >
                  Al registrarse, confirma que acepta los Términos y condiciones y la Política de privacidad
                </Typography>
              </Box>


              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </form>

          </Paper>





</Container>
  );
}
export default Formemail;
