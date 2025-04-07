import PropTypes from "prop-types";

// src/components/MediaRow.jsx
const MediaRow = (props) => {

const handleClick = () => {
  setSelectedItem(item);
}

    const {item, setSelectedItem} = props;
    return (
      // TODO: move <tr> element in foreach from Home.jsx here
      <tr key={item.media_id}>
                <td>
                  <img src={item.thumbnail} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
                <td>{item.filesize}</td>
                <td>{item.media_type}</td>
                <td>
                  <button onClick={handleClick}>View</button>
                </td>
              </tr>
    );
  };

  MediaRow.propTypes= {
    item: PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
  }

  export default MediaRow;