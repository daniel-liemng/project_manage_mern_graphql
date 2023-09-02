import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { FaTrash } from 'react-icons/fa';

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='d-flex mt-3 ms-auto'>
      <button onClick={deleteProject} className='btn btn-danger m-2'>
        <FaTrash /> Delete Project
      </button>
    </div>
  );
};

DeleteProjectButton.propTypes = {
  projectId: PropTypes.string,
};

export default DeleteProjectButton;
