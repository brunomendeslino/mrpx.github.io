import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SOCIAL = () => {
	return (
		<div className='social-container'>
			<a href='https://www.instagram.com/manuelrodrigues.px/' target='_blank' rel='noopener noreferrer'>
				<FaInstagram className='footer-icons' />
			</a>
			<a href='https://www.linkedin.com/in/manuelrodriguesvideo/' target='_blank ' rel='noopener noreferrer'>
				<FaLinkedinIn className='footer-icons' />
			</a>
		</div>
	);
};

export default SOCIAL;
