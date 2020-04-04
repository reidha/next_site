import Layout from '../components/Layout';
import { urlGithubReidha, urlGithubNextSite, urlNoteKkd } from '../utils/constant';

import { Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => 
    createStyles({
        center: {
            textAlign: 'center'
        },
        paperContainer: {
            margin: '10px 5px 30px 5px',
            padding: '5px 10px 10px 10px'
        },
        divider: {
            margin: '5px 0px 5px 0px'
        },
        logoLink: {
            verticalAlign: 'middle',
            marginLeft: '10px'
        }
    })
);

export default function About(props) {
    const classes = useStyles(props);
    const theme = useTheme();

    return (
        <Layout>
            <Typography variant="h4" className={classes.center}>About</Typography>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">About this site</Typography>
                <Divider className={classes.divider}/>
                <Typography variant="body1" component="div">
                    This site is made to practice React + Next.js and to showcase my personal projects. 
                    Github repository of this site is <a href={urlGithubNextSite}>here</a>.
                </Typography>
            </Paper>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">About me</Typography>
                <Divider className={classes.divider}/>
                <Typography variant="body1" component="div">
                    <ul>
                        <li>Study
                            <ul>
                                <li>Master of Information Science, Nagoya University, Japan</li>
                            </ul>
                        </li>
                        <li>Work
                            <ul>
                                <li>Product/project manager in Thailand, Bangkok</li>
                            </ul>
                        </li>
                        <li>Programming skills  
                            <ul>
                                <li>Python (For data science)</li>
                                <li>C++ (Library: libevent</li>
                                <li>JavaScript (Framework: React, Node)</li>
                                <li>Flutter</li>
                            </ul>
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">Links</Typography>
                <Divider className={classes.divider}/>
                <Typography variant="body1" component="div">
                    <p>
                        <a href={urlGithubReidha} target="_blank">
                            <img src="/image/github-logo.png" alt="Github Logo" height="28" className={classes.logoLink} />
                            <span className={classes.logoLink}>Github: Reidha</span>
                        </a>
                    </p>
                    <p>
                        <a href={urlNoteKkd} target="_blank">
                            <img src="/image/note-logo.svg" alt="Note Logo" height="28" className={classes.logoLink} />
                            <span className={classes.logoLink}>Note: kkd (Japanese)</span>
                        </a>
                    </p>
                </Typography>
            </Paper>
        </Layout>
    );
};