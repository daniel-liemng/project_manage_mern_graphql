import PropTypes from 'prop-types';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

const ClientRow = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-sm btn-info'>
          <FaPencilAlt />
        </button>
        <button className='btn btn-sm btn-danger mx-2'>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

ClientRow.propTypes = {
  // client: PropTypes.object,
  client: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default ClientRow;
