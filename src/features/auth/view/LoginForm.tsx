import { Box, Button } from '@mui/material';
import { InputField } from '@/components/form/InputField';
import { useLoginForm } from '../hooks/useLoginForm';

export function LoginForm() {
  const { handleUsernameChange, handlePasswordChange, handleLoginFormSubmit } =
    useLoginForm();

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
      <InputField id="email" label="Email" onChange={handleUsernameChange} />
      <InputField
        id="password"
        label="Password"
        type="password"
        onChange={handlePasswordChange}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '20ch', mx: 'auto', mt: 2 }}
        type="submit"
        onClick={handleLoginFormSubmit}
      >
        Sign In
      </Button>
    </Box>
  );
}
