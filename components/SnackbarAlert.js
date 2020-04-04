import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

export default function SnackbarAlert({ open, autoHideDuration, onClose, severity, children }) {
    return (
        <>
            <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
                <Alert severity={severity} variant="filled" elevation={10}>
                    {children}
                </Alert>
            </Snackbar>
        </>
    )
}

SnackbarAlert.propTypes = {
    open: PropTypes.bool.isRequired,
    autoHideDuration: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    severity: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}