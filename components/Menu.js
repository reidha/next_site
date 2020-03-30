import { useState } from 'react';
import Link from 'next/link';
import ShareIcon from '@material-ui/icons/Share';
import ShareDialog from './ShareDialog';


export default function Menu() {
    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

    const handleOpen = () => {
        setIsShareDialogOpen(true);
    }
    
    const handleClose = () => {
        setIsShareDialogOpen(false);
    }

    return (
        <>
            <Link href="/">
                <img src="/logo/logo-256.png" alt="logo" height="48"/>
            </Link>
            <Link href="/products/todo/">
                <a>[Android] ToDo</a>
            </Link>
            <ShareIcon onClick={handleOpen} />
            <ShareDialog
                open={isShareDialogOpen}
                onClose={handleClose}
            />
        </>
    )
}
