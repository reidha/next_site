import { useState } from 'react';
import Link from 'next/link';
import { Share as ShareIcon, Menu as MenuIcon,
    EventNote as EventNoteIcon, InfoOutlined as InfoOutlinedIcon } from '@material-ui/icons';
import ShareDialog from './ShareDialog';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Divider, List, ListItem, ListItemText,
    Toolbar, AppBar, IconButton, Hidden, Drawer
} from '@material-ui/core';
import PropTypes from 'prop-types';

import ResponsiveDrawerListItem from './ResponsiveDrawerListItem';
import { drawerWidth, headerNavigationHeight } from '../utils/constant';


const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0
            }
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth
            }
        },
        toolBar: {
            justifyContent: 'space-between',
            minHeight: headerNavigationHeight
        },
        menuIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            }
        },
        shareIcon: {
            size: 24,
            margin: 12
        },
        mixinsToolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2),
            flexShrink: 1
        }
    })
);

export default function ResponsiveDrawer(props) {
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleShareDialogOpen = () => {
        setIsShareDialogOpen(true);
    };

    const handleShareDialogClose = () => {
        setIsShareDialogOpen(false);
    };


    // <Link href="/products/todo/">
    // <a>[Android] ToDo</a>
    // </Link>
    const drawer = (
        <>
            <Divider />
            <List>
                <ResponsiveDrawerListItem
                    href="/"
                    icon={<img src="/logo/logo-256.png" alt="logo" height="32" />}
                    text="Top" />
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText primary="Android app" />
                </ListItem>
                <ResponsiveDrawerListItem
                    href="/products/todo/"
                    icon={<EventNoteIcon />}
                    text="TODO" />
            </List>
            <Divider />
            <List>
            <ResponsiveDrawerListItem
                    href="/about/"
                    icon={<InfoOutlinedIcon />}
                    text="About" />
            </List>
        </>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolBar} varient="dense">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuIcon}>
                        <MenuIcon />
                    </IconButton>
                    <Link href="/">
                        <img src="/logo/logo-256.png" alt="logo" height="48" />
                    </Link>
                    <ShareIcon 
                        onClick={handleShareDialogOpen} 
                        className={classes.shareIcon}/>
                    <ShareDialog
                        open={isShareDialogOpen}
                        onClose={handleShareDialogClose} />
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="navigation">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={isDrawerOpen}
                        onClose={handleDrawerToggle}
                        classes={{ paper: classes.drawerPaper }}
                        ModalProps={{ keepMounted: true }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{ paper: classes.drawerPaper }}
                        variant="permanent"
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.mixinsToolbar} />
                {props.children}
            </main>
        </div>
    )
}

ResponsiveDrawer.propTypes = {
    children: PropTypes.node.isRequired
}