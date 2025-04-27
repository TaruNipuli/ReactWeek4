import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { useAuthentication } from '../hooks/apiHooks';
import { useNavigate } from 'react-router-dom';
import { useMedia} from '../hooks/apiHooks';

const MediaRow = (props) => {
  const { isLoggedIn } = useAuthentication();
  const { item, setSelectedItem } = props;
  const { deleteMedia, modifyMedia } = useMedia();
  const navigate = useNavigate();

  const handleModify = async () => {
    try {
      console.log('Modifying media:', item);
      await modifyMedia(
        {
          id: item.media_id,
          title: 'Updated Title',
          description: item.description,
          media_type: item.media_type,
        },
        localStorage.getItem('token')
      );
      navigate(0); // Refresh the page
    } catch (error) {
      console.error('Error modifying media:', error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log('Deleting media:', item);
      await deleteMedia(item.media_id, localStorage.getItem('token'));
      navigate(0);
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  return (
    <tr className="*:p-4 *:border-2 *:border-[#6b7787]">
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-52 object-cover"
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td className="p-0!">
        <div className="flex gap-2 *:p-2">
          <Link
            to="/single"
            state={{ item }}
            className="hover:bg-emerald-700 hover:text-gray-900"
            onClick={(event) => {
              event.preventDefault();
              setSelectedItem(item);
            }}
          >
            View
          </Link>

          {isLoggedIn && (
            <>
              <button
                type="button"
                className="hover:bg-sky-400 hover:text-black"
                onClick={handleModify}
              >
                Modify
              </button>
              <button
                type="button"
                className="hover:bg-red-500 hover:text-black"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
