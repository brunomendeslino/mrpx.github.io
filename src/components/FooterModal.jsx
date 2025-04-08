import React from 'react';

const FooterModal = ({ responseMessage, onClose }) => {
	return (
		<div className='footer-modal'>
			<div className='footer-modal__p-container'>
				 {responseMessage}
			</div>
			<div className='footer-modal__btn-container'>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default FooterModal;
