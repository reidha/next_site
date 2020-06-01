import Layout from '../components/Layout';
import { urlGithubReidha, urlGithubNextSite, urlNoteKkd, sharedStyle } from '../utils/constant';

import { Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles(sharedStyle)
);

export default function About(props) {
    const classes = useStyles(props);

    return (
        <Layout>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">About this site</Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="div">
                    <p>This site is made by React + Next.js and showcases my personal projects.
                    Github repository of this site is <a href={urlGithubNextSite}>here</a>.</p>
                </Typography>
            </Paper>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">About me</Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="div">
                    <ul>
                        <li>Work
                            <ul>
                                <li>Product Manager with CSO&CSPO in Bangkok, Thailand</li>
                            </ul>
                        </li>
                        <li>Study
                            <ul>
                                <li>Master of Information Science, Nagoya University, Japan</li>
                            </ul>
                        </li>
                        <li>Programming skills
                            <ul>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>Flutter</li>
                                <li>Java</li>
                                <li>C++</li>
                            </ul>
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">Links</Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="div">
                    <p>
                        <a href={urlGithubReidha} target="_blank" rel="noopener noreferrer">
                            <img src="/image/github-logo.png" alt="Github Logo" height="28" className={classes.logoLink} />
                            <span className={classes.logoLink}>Github: Reidha</span>
                        </a>
                    </p>
                    <p>
                        <a href={urlNoteKkd} target="_blank" rel="noopener noreferrer">
                            <img src="/image/note-logo.svg" alt="Note Logo" height="28" className={classes.logoLink} />
                            <span className={classes.logoLink}>Note: kkd (Japanese website)</span>
                        </a>
                    </p>
                </Typography>
            </Paper>
        </Layout>
    );
}