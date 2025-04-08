import React from 'react';
import Flowledge_copy from './Flowledge_copy';
import ContactForm from './ContactForm';

const Footer = () => {
	return (
		<footer>
			<div className='footer-container'>
				<div className='footer-container__form'>
					<div className='footer-container__h2-container'>
						<h2 className='footer-container__h2-container__h2'>Connect + Follow</h2>
					</div>
					<ContactForm />
				</div>
				<div className='footer-container__copy'>
					<Flowledge_copy />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
