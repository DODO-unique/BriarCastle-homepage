import { useEffect } from 'react';
import Lenis from 'lenis';
import './App.css';
import Hero from './components/hero';
import Header from './components/header';
import Body from './components/body';
// Footer intentionally not imported to keep it inactive. To re-enable, uncomment the import below.
// import Footer from './components/footer';

export default function App () {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smoothWheel: true,
        });

        let animationFrameId = 0;

        const animate = (time: number) => {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="canvas-viewport">
            {/* Ribbon is placed inside the canvas-viewport so it is positioned relative to the canvas and will not leak outside when the canvas grows */}
            <div className="ribbon" />
            <Hero />
            <Header />
            <Body />
            {/* Footer intentionally not rendered. To re-enable, uncomment the line below and the import at the top of this file. */}
            {/* <Footer /> */}
        </div>
    )
}
