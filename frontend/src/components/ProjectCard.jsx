import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <div className='col-md-4'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{project.name}</h5>
            <button className='btn btn-light'>View</button>
          </div>

          <p className='small'>
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default ProjectCard;
