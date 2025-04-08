import React from 'react';

const PrivacyPolicy = ({ onClose }) => {
	return (
		<section className='privacy-policy'>
			<div className='privacy-policy__container'>
				<h1>Privacy Policy</h1>
				<div className='privacy-policy__container__paragraphs'>
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>1. Introduction</strong>
						<br />
						Welcome to our website. Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and share your information when you use our landing page.
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>2. Data Collected</strong>
						<br />
						We may collect the following personal data when you fill out our forms:
						<br />
						- Name (optional)
						<br />
						- Email address (optional)
						<br />- IP address and browsing data (via cookies and analytics tools)
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>3. How We Use Your Data</strong>
						<br />
						The data collected may be used to:
						<br />
						- Send communications and newsletters (if authorized)
						<br />
						- Improve user experience and analyze site access
						<br />- Comply with legal and regulatory obligations
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>4. Data Sharing</strong>
						<br />
						We do not share your personal data with third parties, except:
						<br />
						- When necessary for email marketing services
						<br />- To comply with legal requirements
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>5. Data Retention</strong>
						<br />
						Your data will be stored as long as necessary for the purposes described in this policy or until you request its deletion.
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>6. Your Rights</strong>
						<br />
						You have the right to:
						<br />
						- Request access, correction, or deletion of your data
						<br />
						- Withdraw your consent at any time
						<br />- File a complaint with data protection authorities
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>7. Security</strong>
						<br />
						We adopt technical and organizational measures to protect your data from unauthorized access or breaches.
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>8. Cookies</strong>
						<br />
						Our website may use cookies. You can disable them in your browser settings.
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>9. Contact</strong>
						<br />
						Questions? Contact us at: <a href='mailto:your@email.com'>your@email.com</a>
					</p>
					<br />
					<p className='privacy-policy__container__paragraphs__p'>
						<strong>10. Updates</strong>
						<br />
						This policy may be updated. The most recent version will always be available on this page.
					</p>
				</div>
				<button className={'privacy-policy__container__btn'} onClick={onClose}>
					OK
				</button>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
