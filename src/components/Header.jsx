import Navbar from './Navbar.jsx';

const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<div className='header-container__center'>
					<div className='header-container__center__left'>
						<div className='header__p-container'>
							<p className='header__p' id='gallery'>
								MrPX
							</p>
						</div>
					</div>
					<div className='header-container__center__right'>
						<Navbar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
