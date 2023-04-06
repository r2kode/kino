import { TextField } from '@mui/material';

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
};

export function InputField(props: InputFieldProps) {
  return <TextField variant="outlined" fullWidth margin="normal" {...props} />;
}
