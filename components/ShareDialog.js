import { title, url } from '../utils/constant';

import { Button, Dialog, DialogTitle, DialogContent, Divider, DialogActions } from '@material-ui/core';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => 
    createStyles({
        shareIconArea: {
            padding: 10,
            display: 'flex',
            justifyContent: 'space-around',
        }
    })
);

export default function ShareDialog(props) {
    console.log('ShareDialog');
    const classes = useStyles(props);
    console.log(classes);
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
                        <Button color="primary">Copy URL</Button>
                    </CopyToClipboard>
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