import Layout from '../components/Layout';
import { urlGithubReidha, urlGithubNextSite } from '../utils/constant';

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
                <Typography variant="body1">
                    This site is made to practice React + Next.js and to showcase my personal projects. 
                    Github repository of this site is <a href={urlGithubNextSite}>here</a>.
                </Typography>
            </Paper>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">About me</Typography>
                <Divider className={classes.divider}/>
                <Typography variant="body1">
                    I graduated from Nagoya University (Japan) with Master of Information Science. 
                    Now I am working as a product/project manager in Bangkok (Thailand). 
                    Python, Java, JavaScript and C++ are the programming languages I have experiences in. 
                    Recently I have started learning React and Flutter.
                </Typography>
            </Paper>
        </Layout>
    );
};