import React, { useRef, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

const Modal = ({ videoSrc, Close, Key }) => {
	const videoRef = useRef(null); // Reference for the video element
	const progressRef = useRef(null); // Reference for the progress element

	useEffect(() => {
		const videoElement = videoRef.current;
		const progressElement = progressRef.current;

		// Function to update the progress bar
		const updateProgress = () => {
			if (videoElement && progressElement) {
				const progressValue = (videoElement.currentTime / videoElement.duration) * 100;
				progressElement.value = progressValue;
			}
		};

		// Add the 'timeupdate' event listener to update progress
		if (videoElement) {
			videoElement.addEventListener('timeupdate', updateProgress);
		}

		// Cleanup the event listener when component unmounts
		return () => {
			if (videoElement) {
				videoElement.removeEventListener('timeupdate', updateProgress);
			}
		};
	}, []);

	return (
		<div className='modal'>
			<div className='modal__container'>
				<div className='modal__container__video'>
					<video ref={videoRef} autoPlay src={videoSrc} onEnded={Close} />
				</div>

				<div className='modal__container__controls'>
					<progress
						id='progress'
						ref={progressRef} // Attach the reference to the progress element
						max='100'
						value='0'
					></progress>
					<button className='close-modal'>
						<CgClose onClick={Close} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
