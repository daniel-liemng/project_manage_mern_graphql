import { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useNavigate } from 'react-router-dom';

const EditProjectForm = ({ project }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState('');

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert('Please fill in all fields');
    }

    updateProject(name, description, status);
  };

  return (
    <div className='mt-3'>
      <h3>Update Project</h3>
      <form onSubmit={handleUpdateSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-control'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Status</label>
          <select
            className='form-select'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value='' disabled>
              Please select status
            </option>
            <option value='notstarted'>Not Started</option>
            <option value='inprogress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
        </div>

        <div className='mb-3'>
          <button type='submit' className='btn btn-info'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

EditProjectForm.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default EditProjectForm;
