/* eslint-disable react/prop-types */
import { ReactLenis } from 'lenis/react';

const SmoothScroll = ({ children }) => {
	return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
