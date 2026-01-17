import { Button } from '@mui/material';

export const ButtonComponent = ({ variant, size, children, ...props }) => {

    return (
        <Button
            variant={variant}
            size={size}
            {...props}
        > {children} </Button>
    )
} 