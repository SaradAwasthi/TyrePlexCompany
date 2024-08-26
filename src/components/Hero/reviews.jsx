import React from 'react';
import './Review.css';
import Card from '../../re-usable-components/Cards';

const reviews = [
  {
    id: 1,
    name: "Md Nasir",
    comment: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your...",
    imgSrc: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo"
  },
  {
    id: 2,
    name: "Rohit Bhati",
    comment: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
    imgSrc: "https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo"
  },
  {
    id: 3,
    name: "Pradeep Kumar",
    comment: "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
    imgSrc: "https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo"
  },
  {
    id: 4,
    name: "Md Nasir",
    comment: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your...",
    imgSrc: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo"
  },
  {
    id: 5,
    name: "Rohit Bhati",
    comment: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
    imgSrc: "https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo"
  },
  {
    id: 6,
    name: "Pradeep Kumar",
    comment: "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
    imgSrc: "https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo"
  }
];

const Reviews = () => {
  return (
    <>
    {/* <Card height="auto" width="100%"> */}
      <div className="review-header">
        <span className="review-count">{reviews.length}</span> Google Reviews
      </div>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={review.id}>
            <div className="review-user">
              <img src={review.imgSrc} alt={review.name} className="user-avatar" />
              <div className="user-name">{review.name}</div>
            </div>
            <div className="review-comment">{review.comment}</div>
          </div>
        ))}
      </div>
     {/* </Card> */}
    </>
  );
};

export default Reviews;