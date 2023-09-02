import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { ADD_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { GET_CLIENTS } from '../queries/clientQueries';

const AddProjectModal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('notstarted');
  const [clientId, setClientId] = useState('');

  const { data: clientsData, loading, error } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      status,
      clientId,
    },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: [...projects, addProject],
        },
      });
    },
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status || !clientId) {
      return alert('Please fill in all fields');
    }
    addProject(name, description, status, clientId);

    setName('');
    setDescription('');
    setStatus('notstarted');
    setClientId('');
  };

  if (loading) return null;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            className='btn btn-info'
            data-bs-toggle='modal'
            data-bs-target='#addProjectModal'
          >
            <div className='d-flex align-items-center gap-2'>
              <FaList />
              <div>Add Project</div>
            </div>
          </button>

          <div
            className='modal fade'
            id='addProjectModal'
            tabIndex='-1'
            aria-labelledby='addProjectLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h1 className='modal-title fs-5' id='addClientLabel'>
                    Add Project
                  </h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  <form onSubmit={handleAddSubmit}>
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
                      <label className='form-label'>Client</label>
                      <select
                        className='form-select'
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value='' disabled>
                          Please select client
                        </option>
                        {clientsData?.clients?.map((client) => (
                          <option value={client.id} key={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className='mb-3'>
                      <button
                        type='submit'
                        className='btn btn-info'
                        data-bs-dismiss='modal'
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddProjectModal;
