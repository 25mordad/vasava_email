// Render Prop
import React from 'react';
import { useFormik  } from 'formik';
import api from './api/index.js';
import * as yup from 'yup';
import {Button , TextField , Grid , makeStyles , Paper , Select,  MenuItem} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = yup.object({
  firstname: yup
  .string('Enter your name')
  .min(2, 'Name should be of minimum 2 characters length')
  .required('Name is required'),
  lastname: yup
  .string('Enter your lastname')
  .min(2, 'lastname should be of minimum 2 characters length')
  .required('Name is required'),
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),
  phone: yup
  .string('Enter your phone')
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Phone is required'),
  salary: yup
  .string('Enter your salary')
  .required('salary is required'),
  interests: yup
  .string('Enter your interests')
  .required('interests is required'),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));








const Form = () => {

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: 'foobar@example.com',
      phone: '',
      salary: '',
      interests: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const sendData = async () => {
        const resp = await api(values);
        console.log(resp);
      }
      sendData();
    },
  });
  // console.log("test");

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />


          <Paper className={classes.paper}>

        <Typography component="h1" variant="h5">
        Formulario de solicitud
        </Typography>


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

                  <MenuItem value="1">less than 18K</MenuItem>
                  <MenuItem value="2">between 18k and 35k</MenuItem>
                  <MenuItem value="3">between 35k and 55k</MenuItem>
                  <MenuItem value="4">more than 55k</MenuItem>
              </Select>

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

                  <MenuItem value="Music">Music</MenuItem>
                  <MenuItem value="Fashion">Fashion</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
              </Select>


              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <br/><br/><br/><br/><br/><br/><br/>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </Paper>






</Container>
  );
}
export default Form;
