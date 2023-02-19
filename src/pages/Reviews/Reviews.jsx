import { useState, useEffect } from 'react';
import { findReviews } from 'axiosAPI/axios';
import { filterFuncToArrById } from 'filterFuncToArrById/filterFuncToArrById';
import { useLocation } from 'react-router-dom';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const location = useLocation();

  useEffect(() => {    
    const showReviews = async () => {
      let reviews = await findReviews(location.state);
      reviews = filterFuncToArrById(reviews);
      setReviewList(reviews);
    };
    showReviews();
  }, [location]);

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
