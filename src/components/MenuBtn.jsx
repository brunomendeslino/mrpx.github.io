import React, { useState, useEffect } from 'react';

const MenuBtn = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Update isOpen if onClose becomes true (or "true")
  useEffect(() => {
    if (onClose === false) {
		setIsOpen(false);
	
    }
  }, [onClose]);

  // Toggle the state to update the class on the anchor element
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='button'>
      <a
        id='MenuBtn'
        href='#'
        className={`hamburger-icon cross-animation ${isOpen ? 'open' : ''}`}
        onClick={e => {
          e.preventDefault(); // Prevent the default anchor behavior
          toggleOpen();
        }}
      >
        <span></span>
      </a>
    </div>
  );
};

export default MenuBtn;