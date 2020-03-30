import { title, url } from '../utils/constant';

import { Button, Dialog, DialogTitle, DialogContent, Divider, DialogActions } from '@material-ui/core';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

export default function ShareDialog(props) {
    return (
        <>
            <Dialog
                open={props.open}
                onClose={props.onClose}>
                <DialogTitle>Share this site</DialogTitle>
                <Divider />
                <DialogContent>
                    <FacebookShareButton url={url} quote={title}>
                        <FacebookIcon size="32" round />
                    </FacebookShareButton>
                    <TwitterShareButton url={url} quote={title}>
                        <TwitterIcon size="32" round />
                    </TwitterShareButton>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}