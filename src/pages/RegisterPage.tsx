import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  FormControl,
  Box,
  Typography,
  Container,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
    event?.preventDefault();
    let email = data.email;
    let password = data.password;
    // Usually here we making request to server where we checking if user exist, setup tokens etc.
    localStorage.setItem('user', JSON.stringify({ email, password }));
    navigate(from, { replace: true });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 2 }}
        >
          <FormControl
            error={false}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          >
            <InputLabel htmlFor="outlined-adornment-email">
              Email Adress
            </InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-email"
              label="Email Address"
              {...register('email', {
                required: true,
              })}
            />
          </FormControl>
          <FormControl
            error={false}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              // margin="normal"
              fullWidth
              id="outlined-adornment-password"
              label="Password"
              {...register('password', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Мінімальна кількість символів: 3',
                },
              })}
              type={'password'}
            />
            <div>
              {errors?.password && (
                <Typography>{errors?.password?.message}</Typography>
              )}
            </div>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
