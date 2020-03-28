import { title, url } from './Constant';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

export default function Footer() {
    return (
        <>
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size="32" round/>
            </FacebookShareButton>
            <TwitterShareButton url={url} quote={title}>
                <TwitterIcon size="32" round/>
            </TwitterShareButton>
        </>
    )
}