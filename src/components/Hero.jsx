import React, { useEffect, useState, useMemo } from 'react';


const Hero = () => {
	const text = 'Blending art and cutting-edge technology to craft innovative inspiring visual narratives';
	const upperText = useMemo(() => text.toUpperCase(), [text]);
	const words = useMemo(() => upperText.split(' '), [upperText]);

	const [delays, setDelays] = useState([]);
	const [opacity, setOpacity] = useState(1);

	// Generate random delays for each character (runs once when upperText changes)
	useEffect(() => {
		const totalChars = upperText.length;
		const generatedDelays = Array.from({ length: totalChars }, () => Math.random() * 1.5);
		setDelays(generatedDelays);
	}, [upperText]);

	// Update opacity based on scroll position for fade effect
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY * 0.5;
			const fadeOutPoint = window.innerHeight * 0.43; // When the fade starts
			const fadeOutDistance = window.innerHeight * 0.4; // Scroll distance for full fade-out

			let newOpacity = 1 - (scrollPosition - fadeOutPoint) / fadeOutDistance;
			newOpacity = Math.max(0, Math.min(1, newOpacity)); // Clamp value between 0 and 1
			setOpacity(newOpacity);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Use a counter to ensure each letter gets a unique key and proper delay
	let globalIndex = 0;

	return (
		<div className='hero-container'>

			<div className='hero-container__text-container' style={{ opacity }}>
				<h1 className='heading'>
					{words.map((word, wordIndex) => (
						<span key={wordIndex} className='word'>
							{word.split('').map(letter => {
								const letterIndex = globalIndex++;
								return (
									<span
										key={letterIndex}
										className='letter'
										style={{
											animationDelay: `${delays[letterIndex] || 0}s`,
											display: 'inline',
										}}
									>
										{letter}
									</span>
								);
							})}
							&nbsp;&nbsp;
						</span>
					))}
				</h1>
			</div>
		</div>
	);
};

export default Hero;
