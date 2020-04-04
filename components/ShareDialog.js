import { title, url } from '../utils/constant';
import SnackbarAlert from './SnackbarAlert';

import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Divider, DialogActions } from '@material-ui/core';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => 
    createStyles({
        shareIconArea: {
            padding: 10,
            display: 'flex',
            justifyContent: 'space-around',
        }
    })
);

export default function ShareDialog(props) {
    const classes = useStyles(props);

    const [isSnackbarAlertOpen, setIsSnackbarAlertOpen] = React.useState(false);
    const openSnackbarAlert = () => {
        setIsSnackbarAlertOpen(true);
    };
    const closeSnackbarAlert = () => { // possible arguments: event, reason
        setIsSnackbarAlertOpen(false);
    };

    return (
        <>
            <Dialog
                open={props.open}
                onClose={props.onClose}>
                <DialogTitle>Share this site</DialogTitle>
                <Divider />
                <DialogContent className={classes.shareIconArea}>
                    <FacebookShareButton url={url} quote={title}>
                        <FacebookIcon size="40" round />
                    </FacebookShareButton>
                    <TwitterShareButton url={url} quote={title}>
                        <TwitterIcon size="40" round />
                    </TwitterShareButton>
                </DialogContent>
                <Divider />
                <DialogContent className={classes.shareIconArea}>
                    <CopyToClipboard text={url}>
                        <Button color="primary" onClick={openSnackbarAlert}>Copy URL</Button>
                    </CopyToClipboard>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
                <SnackbarAlert 
                    open={isSnackbarAlertOpen} 
                    autoHideDuration={5000}
                    onClose={closeSnackbarAlert} 
                    severity="success">
                    Copied to Clipboard! 
                </SnackbarAlert>
            </Dialog>
        </>
    )
}

ShareDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}