import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import MenuBtn from './MenuBtn.jsx';

const Navbar = () => {
	const [changeColorNav, setChangeColorNav] = useState(false);
	const [menuMobile, setMenuMobile] = useState(false);
	const [onClose, setOnClose] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const viewport = window.innerWidth <= 991;
			const scrollPosition = window.scrollY;
			setChangeColorNav(viewport || scrollPosition >= 60);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		if (window.innerWidth <= 991) {
			setMenuMobile(prevState => !prevState);
			setOnClose(prevState => !prevState);
		}
	};

	return (
		<div className={changeColorNav ? 'navbar active' : 'navbar'}>
			<div className='container'>
				<div className='navbar__wrapper'>
					<nav>
						<ul className={menuMobile ? 'navbar__menu active' : 'navbar__menu'}>
							<li>
								<Link to='hero' spy={true} smooth={true} offset={0} duration={800} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>
									Home
								</Link>
							</li>
							<li>
								<Link to='gallery' spy={true} smooth={true} offset={0} duration={800} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>
									Gallery
								</Link>
							</li>
							<li>
								<Link to='about' spy={true} smooth={true} offset={70} duration={800} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>
									About
								</Link>
							</li>
							<li>
								<Link to='footer' spy={true} smooth={true} offset={45} duration={800} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>
									Connect
								</Link>
							</li>
						</ul>
					</nav>
					<div className='nav__hamburguer' onClick={toggleMenu}>
						<MenuBtn onClose={onClose} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
