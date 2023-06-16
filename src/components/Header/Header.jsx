import './index.css';
import { PropTypes } from 'prop-types';

const Header = ({ title }) => {
  const characters = title.split('');
  return (
    <div
      className={`  px-2 py-4 rounded-3xl mt-4 w-[80px] bg-[#416051b6] text-white flex items-center justify-center ${
        title === 'Home' ? 'h-[100vh]' : 'h-auto'
      }`}
    >
      <h1 className={`flex flex-col items-center  ${characters.length > 4 ? '' : 'gap-10'}  justify-center w-full font-bold font-sans text-[48px] `}>
        {characters.map((char, index) => (
          <span
            key={index}
            className='rotate-0 uppercase cursor-default'
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
