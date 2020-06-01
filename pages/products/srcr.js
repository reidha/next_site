import Layout from '../../components/Layout';
import { sharedStyle, urlGithubReidha } from '../../utils/constant';

import { Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles(sharedStyle)
);

export default function Srcr(props) {
    const classes = useStyles(props);

    return (
        <Layout>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">Source Replacer</Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="div">
                    <p>Replace any link in web pages to check what difference your change can make.</p>
                    <p>(Pending review on Chrome Web Store)</p>
                    <p>
                        <a href={urlGithubReidha + '/chrome_extension_replace_src'} target="_blank" rel="noopener noreferrer">
                            <img src="/image/github-logo.png" alt="Github Logo" height="28" className={classes.logoLink} />
                            <span className={classes.logoLink}>Github repository</span>
                        </a>
                    </p>
                </Typography>
            </Paper>
        </Layout>
    );
}