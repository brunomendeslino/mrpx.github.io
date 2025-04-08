import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import texts from '../assets/texts/about.json';
import aboutPic from '../assets/img/aboutPic.png';

const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: 'ease-in-out',
			once: false,
		});
	}, []);

	return (
		<div className='about-container'>
			<div className='about-container__img-container' data-aos='zoom-in'>
				<img src={aboutPic} alt='Styled picture of the author Manuel' className='about-container__img-container__img' />
			</div>

			<div className='about-container__text-container' data-aos='fade-up'>
				<div className='about-container__text-container__h2-container' data-aos='fade-in'>
					<h2 className='about-container__text-container__h2-container__h2'>About me</h2>
				</div>
				<div className='about-container__p-container'>
					<br />
					<p className='about-container__p-container__p'>{texts[0].text}</p>
					<br />
					<p className='about-container__p-container__p'>{texts[1].text}</p>
				</div>
			</div>
		</div>
	);
};

export default About;
