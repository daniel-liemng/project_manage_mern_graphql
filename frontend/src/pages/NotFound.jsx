import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <FaExclamationTriangle className='text-danger' size='5rem' />
      <h1>404</h1>
      <p className='lead'>Page Not Found</p>
      <Link to='/' className='btn btn-info'>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
