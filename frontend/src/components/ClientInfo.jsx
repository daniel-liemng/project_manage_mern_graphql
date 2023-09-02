import { FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className='mt-3'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {client.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {client.email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.phone}
        </li>
      </ul>
    </>
  );
};

ClientInfo.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default ClientInfo;
