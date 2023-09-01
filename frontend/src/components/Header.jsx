import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar bg-light mb-4'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <h3>Project Management</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
