import Layout from '../../components/Layout';
import { sharedStyle } from '../../utils/constant';

import Carousel from 'react-material-ui-carousel';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider } from '@material-ui/core';


const useStyles = makeStyles(() =>
    createStyles({
        ...sharedStyle,
        ...{
            carouselWidth: {
                width: '100%'
            }
        }
    })
);

export default function Todo(props) {
    const classes = useStyles(props);

    const settings = {
        animation: 'slide',
    }

    return (
        <Layout>
            <Carousel {...settings} className={classes.carouselWidth}>
                <div>
                    <img src="/image/todo-withphone.png" className={classes.carouselWidth} />
                </div>
                <div>
                    <img src="/image/todo-screenshot.jpg" className={classes.carouselWidth} />
                </div>
            </Carousel>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">Simple Lightweight Todo</Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="div">
                    <p>Minimal functions to keep tracking tasks. Go to Google Play from the button below.</p>
                    <a href='https://play.google.com/store/apps/details?id=io.github.reidha.simplelightweighttodo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="155px" /></a>
                </Typography>
            </Paper>
        </Layout>
    );
}
