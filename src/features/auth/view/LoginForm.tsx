import { Box, Button } from '@mui/material';
import { InputField } from '@/components/form/InputField';
import { useLoginForm } from '../hooks/useLoginForm';

export function LoginForm() {
  const {
    credentials: { username, password },
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleLoginFormSubmit,
  } = useLoginForm();

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
      <InputField
        id="email"
        label="Email"
        value={username}
        onChange={handleUsernameChange}
        error={!!error?.message}
        helperText={error?.message}
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!error?.message}
        helperText={error?.message}
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
