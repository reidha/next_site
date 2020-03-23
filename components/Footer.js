export default function Footer() {
    return (
        <>
            {/** Facebook */}
            <div className="fb-share-button" data-href="https://reidha.github.io/" data-layout="button_count" data-size="small">
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Freidha.github.io%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a>
            </div>

            {/** Twitter */}
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </>
    )
}