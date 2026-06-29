import './App.css';
import Hero from './components/hero';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default function App () {
    return (
        <div>
            <div className="ribbon" />
            <Hero />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}