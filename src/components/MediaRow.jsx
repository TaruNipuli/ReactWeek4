import PropTypes from "prop-types";

// src/components/MediaRow.jsx
const MediaRow = (props) => {
    const {item} = props;
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
              </tr>
    );
  };

  MediaRow.propTypes= {
    item: PropTypes.object.isRequired,
  }

  export default MediaRow;