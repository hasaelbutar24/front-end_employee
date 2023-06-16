import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ErrorsHandler = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      <h1 className='font-bold text-[18px] capitalize text-center h-100vh '>Not found route</h1>
      <Link
        to='/'
        className='font-medium cursor-pointer'
      >
        Back to Home
        <ArrowForwardIcon style={{ width: '20px', marginLeft: '4px' }} />
      </Link>
    </div>
  );
};

export default ErrorsHandler;
