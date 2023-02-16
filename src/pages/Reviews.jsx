import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { findReviews } from 'axiosAPI/axios';
import { filterFuncToArrById } from 'filterFuncToArrById/filterFuncToArrById';

const Reviews = ({ id }) => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const showReviews = async () => {
      let reviews = await findReviews(id);
      reviews = filterFuncToArrById(reviews);
      setReviewList(reviews);
    };
    showReviews();
  }, [id]);

  return (
    <>
      {reviewList.length === 0 ? (
        <h3>
          There is no information about the film`s reviews in the database!
        </h3>
      ) : (
        <ul>
          {reviewList.map(
            ({ id, author = 'Not available', content = 'Not available' }) => (
              <li key={id}>
                <h3>Review's name: {author}</h3>
                <p> {content}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
}