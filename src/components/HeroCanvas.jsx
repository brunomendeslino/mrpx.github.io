import React, { useRef, useEffect } from 'react';

const ScrollVideo = () => {
	// Reference to the video element
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;

		// Define the IntersectionObserver callback
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					video.play();
				} else {
					video.pause();
				}
			});
		};

		// Create the IntersectionObserver
		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 0.5, // Trigger when 50% of the video is visible
		});

		// Start observing the video element
		if (video) {
			observer.observe(video);
		}

		// Cleanup observer on component unmount
		return () => {
			if (video) {
				observer.unobserve(video);
			}
		};
	}, []);

	return (
		<div>
			<video ref={videoRef} width='600' controls muted>
				<source src='your-video-file.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default ScrollVideo;
