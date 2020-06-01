import Layout from '../components/Layout';
import { sharedStyle } from '../utils/constant';

import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles(sharedStyle)
);

export default function Index(props) {
    const classes = useStyles(props);

    return (
        <Layout>
            <Typography variant="h4">Personal projects</Typography>
            <div className={classes.flex}>
                <Paper className={classes.paperTile}>
                    <div>
                        <Link href="/products/srcr/">
                            <img src="/image/srcr-logo.png" width="100%" />
                        </Link>
                    </div>
                </Paper>
                <Paper className={classes.paperTile}>
                    <div>
                        <Link href="/products/todo/">
                            <img src="/image/todo-logo.png" width="100%" />
                        </Link>
                    </div>
                </Paper>
            </div>
        </Layout>
    );
}
