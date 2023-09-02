import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

import { GET_PROJECT } from '../queries/projectQueries';
import ClientInfo from '../components/ClientInfo';

const Project = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  console.log(data);

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link
            to='/'
            className='btn btn-light btn-sm w-25 d-inline mx-auto mb-3'
          >
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>

          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
};

export default Project;
