import { TextField } from '@mui/material';

export const Field = ({ label, size, ...props }) => {

    return (
        <TextField label={label}
         size={size} 
         {...props}
         />

    )

}