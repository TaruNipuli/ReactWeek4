import { useState, useEffect } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {fetchData} from '../utils/fetchData';


  
const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selectedItem', selectedItem);

  const getMedia = async () => {
    try {
      const data = await fetchData('test.json');

      setMediaArray(data);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  console.log('mediaArray', mediaArray);
  console.log('selectedItem', selectedItem);
    return (
      <>
        <h2>My Media</h2>
        <table>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created</th>
              <th>Size</th>
              <th>Type</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} setSelectedItem={setSelectedItem} />
            ))}
          </tbody>
        </table>
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      </>
    );
  };
  export default Home;
