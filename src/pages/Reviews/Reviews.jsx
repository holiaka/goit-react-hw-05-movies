import { useState, useEffect } from 'react';
import { findReviews } from 'axiosAPI/axios';
import { filterFuncToArrById } from 'filterFuncToArrById/filterFuncToArrById';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const {id} = useParams();

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
            (review) => (
              <li key={review?.id}>
                <h3>Review's name: {review?.author}</h3>
                <p> {review?.content}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
