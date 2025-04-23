import {Link} from 'react-router';
import PropTypes from 'prop-types';

const MediaRow = (props) => {
  const {item, setSelectedItem} = props;

  const handleClick = () => {
    setSelectedItem(item);
  };

  return (
    <tr className="*:p-4 *:border-2 *:border-[#ccc]">
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
        {/* <button
          className="hover:bg-amber-300 hover:text-gray-900 p-8"
          onClick={handleClick}
        >
          View
        </button> */}
        <Link
          to="/single"
          state={{item}}
          className="hover:bg-fuchsia-900 hover:text-blue-300 p-8"
          onClick={(event) => {
            event.preventDefault();

            setSelectedItem(item);
          }}
        >
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;