import { PropTypes } from 'prop-types';
import { Sidebar, Header } from '../index';

const Container = ({ children, title }) => {
  return (
    <div className=' flex relative'>
      <div className='flex flex-row'>
        <Sidebar />
      </div>
      <Header title={title} />
      <div className='w-full px-2 py-4'>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};
export default Container;
