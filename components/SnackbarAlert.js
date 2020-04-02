import { Snackbar, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default function SnackbarAlert({ open, autoHideDuration, onClose, severity, children }) {
    return (
        <>
            <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
                <Alert onClose={onClose} severity={severity} variant="filled" elevation={6}>
                    {children}
                </Alert>
            </Snackbar>
        </>
    )
}