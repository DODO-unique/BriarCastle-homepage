import './App.css';
import Hero from './components/hero';
import Header from './components/header';
import Body from './components/body';
// Footer intentionally not imported to keep it inactive. To re-enable, uncomment the import below.
// import Footer from './components/footer';

export default function App () {
    return (
        <div>
            <div className="ribbon" />
            <Hero />
            <Header />
            <Body />
            {/* Footer intentionally not rendered. To re-enable, uncomment the line below and the import at the top of this file. */}
            {/* <Footer /> */}
        </div>
    )
}