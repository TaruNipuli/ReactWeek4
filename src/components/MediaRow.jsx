import PropTypes from "prop-types";
import { Link } from "react-router";

const MediaRow = (props) => {

const handleClick = () => {
  setSelectedItem(item);
}

    const {item, setSelectedItem} = props;
    return (
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
                  {/*<button onClick={handleClick}>View</button>*/}
                  <Link to="/single" state={{item}}>View</Link>
                </td>
              </tr> 
    );
  };

  MediaRow.propTypes= {
    item: PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
  }

  export default MediaRow;