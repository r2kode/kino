import { Box, Button } from '@mui/material';
import { InputField } from '@/components/form/InputField';

export function LoginForm() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        my: 1,
        mx: 'auto',
        width: '40ch',
      }}
      autoComplete="off"
    >
      <InputField id="email" label="Email" />
      <InputField id="password" label="Password" type="password" />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '20ch', mx: 'auto', mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
}
