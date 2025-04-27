import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLike } from '../hooks/apiHooks';
import { useAuthentication } from '../hooks/apiHooks';

const Likes = ({ mediaId }) => {
  const { isLoggedIn } = useAuthentication();
  const { postLike, deleteLike, getLikesByMediaId, getLikesByUser } = useLike();
  const [likes, setLikes] = useState([]);
  const [userLikes, setUserLikes] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const mediaLikes = await getLikesByMediaId(mediaId);
        setLikes(mediaLikes);

        if (isLoggedIn) {
          const userLikes = await getLikesByUser();
          const hasLiked = userLikes.some((like) => like.media_id === mediaId);
          setUserLikes(hasLiked);
        }
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikes();
  }, [mediaId, isLoggedIn]);

  const handleLike = async () => {
    try {
      if (userLikes) {
        await deleteLike(mediaId);
        setUserLikes(false);
        setLikes((prevLikes) => prevLikes.filter((like) => like.media_id !== mediaId));
      } else {
        await postLike(mediaId);
        setUserLikes(true);
        setLikes((prevLikes) => [...prevLikes, { media_id: mediaId }]);
      }
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  return (
    <div className="flex items-center gap-2 margin-top-4">
      <button
        className={`p-2 rounded ${
          userLikes ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
        }`}
        onClick={handleLike}
        disabled={!isLoggedIn}
      >
        {userLikes ? '❤️ Liked' : '🤍 Like'}
      </button>
      <span>{likes.length}</span>
    </div>
  );
};

Likes.propTypes = {
  mediaId: PropTypes.number.isRequired,
};

export default Likes;