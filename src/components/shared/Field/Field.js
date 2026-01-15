import { TextField } from '@mui/material';

export const Field = ({ label, size, fullWidth, ...props }) => {

    return (
        <TextField label={label} sx={{ marginLeft: 5, ...props }} size={size} fullWidth={fullWidth} />

    )

}