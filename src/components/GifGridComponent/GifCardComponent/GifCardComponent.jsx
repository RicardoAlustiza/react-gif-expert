import PropTypes from 'prop-types';

export const GifCardComponent = ({title, url, id}) => {
  return (
    <div className='card' >
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
