import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Social from './Social';
import FooterModal from './FooterModal';
import PrivacyPolicy from './PrivacyPolicy';

const ContactForm = () => {
	const { register, handleSubmit, reset } = useForm();
	const [responseMessage, setResponseMessage] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const onSubmit = async formdata => {
		const payload = {
			...formdata,
			access_key: '4d90b83f-23f0-4c19-be90-5a1f2fdf3e72', // Replace this
			subject: 'Nova mensagem em MrPx. Responde já!',
		};

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const data = await res.json();

			if (res.ok && data.success) {
				setIsModalOpen(true);
				setResponseMessage(
					<p>
						Message successfully sent :) <br />I will get back to you as soon as possible
					</p>,
				);
				reset();
			} else {
				setResponseMessage(`Error sending message: ${data.message}`);
			}
		} catch (error) {
			setResponseMessage('Error sending message. Please try again later.');
			console.error('Request error:', error);
		}
	};

	const handleOpenPrivacyPolicy = () => {
		setIsPrivacyOpen(!isPrivacyOpen);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isPrivacyOpen && <PrivacyPolicy onClose={handleOpenPrivacyPolicy} />}
				{isModalOpen && <FooterModal responseMessage={responseMessage} onClose={handleCloseModal} />}

				{/* Hidden input for Web3Forms access key */}
				<input type='hidden' {...register('access_key')} value='YOUR_WEB3FORMS_ACCESS_KEY' />
				<input type='hidden' {...register('subject')} value='New Contact Form Message' />

				<input {...register('name')} placeholder='Name (*)' required />
				<input {...register('email')} type='email' placeholder='Email (*)' required />
				<textarea {...register('message')} placeholder='Message (*)' required />

				<div className='termsdiv'>
					<input type='checkbox' id='privacypolicy' required />
					<label>
						I accept the
						<a onClick={handleOpenPrivacyPolicy}>
							<strong> Privacy Policy</strong>
						</a>
					</label>
				</div>

				<button type='submit'>Send</button>
				<div className='footer-container__links'>
					<Social />
				</div>
			</form>
		</>
	);
};

export default ContactForm;
