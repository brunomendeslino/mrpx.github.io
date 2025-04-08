import { BrowserRouter } from 'react-router-dom';
import { Element } from 'react-scroll';
import SmoothScroll from './components/SmoothScroll.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<SmoothScroll>
					<Header />
					<main>
						<InteractiveBackground />
						<Element name='hero'>
							<Hero />
						</Element>
						<Element name='gallery'>
							<Gallery />
						</Element>
						<Element name='about'>
							<About />
						</Element>
					</main>
					<Element name='footer'>
						<Footer />
					</Element>
				</SmoothScroll>
			</BrowserRouter>
		</>
	);
};

export default App;
