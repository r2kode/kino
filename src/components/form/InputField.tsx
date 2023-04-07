import { TextField, TextFieldProps } from '@mui/material';

export function InputField(props: TextFieldProps) {
  return <TextField variant="outlined" fullWidth margin="normal" {...props} />;
}
