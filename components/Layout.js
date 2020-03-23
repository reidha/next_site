import Head from './Header';
import { BodyTop } from './BodyCommon';
import Menu from './Menu';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <>
            <Head />
            <BodyTop />
            <Menu />
            {props.children}
            <Footer/>
            
            <style jsx global >{`
                body {
                    font-family: 'Roboto'
                }  
            `}</style>
        </>
    )
}