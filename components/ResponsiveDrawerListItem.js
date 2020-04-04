import Link from 'next/link';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default function ResponsiveDrawerListItem({href, icon, text}) {
    return(
        <Link href={href} passHref>
            <ListItem button component="a">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    );
}

ResponsiveDrawerListItem.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}

