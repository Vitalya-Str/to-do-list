import { Button } from '@mui/material';

export const ButtonComponent = ({ children, ...props }) => {


    return (
        <Button {...props}> {children} </Button>
    )
} 