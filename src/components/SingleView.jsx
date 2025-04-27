import PropTypes from 'prop-types';
import Likes from './Likes';

const SingleView = (props) => {
  const { item, setSelectedItem } = props;

  const handleClick = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {item && (
        <dialog open className="fixed top-[5%] h-dvh left-[10%] overflow-auto">
          <button onClick={handleClick}>&#10005;</button>
          {item.media_type.includes('video') ? (
            <video src={item.filename} controls />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}
          <h3>Title: {item.title}</h3>
          <p>{item.description}</p>

          {/* Likes component */}
          <Likes mediaId={item.media_id} />
        </dialog>
      )}
    </>
  );
};

SingleView.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
