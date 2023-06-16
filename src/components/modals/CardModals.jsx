import { useState } from 'react';
import { PropTypes } from 'prop-types';

const CardModals = ({ children }) => {
  const [size, setSize] = useState(false);

  if (children) {
    setSize(true);
  }
  if (!children) {
    setSize(false);
  }

  return (
    <div className={size ? 'min-w-[200px] w-auto min-h-[140px] h-auto shadow-lg text-black' : 'w-[200px] h-[140px] shadow-lg text-black'}>
      {children}
    </div>
  );
};

CardModals.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CardModals;
