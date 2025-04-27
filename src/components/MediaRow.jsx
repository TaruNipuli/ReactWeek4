import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {useAuthentication} from '../hooks/apiHooks';

const MediaRow = (props) => {
  const {isLoggedIn} = useAuthentication();
  const {item, setSelectedItem} = props;

  const handleClick = () => {
    setSelectedItem(item);
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
          {/* <button
          className="hover:bg-amber-300 hover:text-gray-900 p-8"
          onClick={handleClick}
        >
          View
        </button> */}
          <Link
            to="/single"
            state={{item}}
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
                onClick={() => {
                  console.log('edit button clicked');
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="hover:bg-red-500"
                onClick={() => {
                  console.log('delete button clicked');
                }}
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