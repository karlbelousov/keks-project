import { formatDate } from '../../helpers';
import { Review } from '../../types/review';
import StarRating from '../star-rating/star-rating';

type ReviewItemProps = {
  review: Review | null;
}

function ReviewItem({review}: ReviewItemProps) {
  return (
    <div className="review">
      <div className="review__inner-wrapper">
        <time className="review__date" dateTime={review?.isoDate}>
          {formatDate(review ? review?.isoDate : '')}
        </time>
        <span className="review__author">{review?.user.name}</span>
        <StarRating rating={review ? review?.rating : 0} />
        <div className="review__text-wrapper">
          <p className="review__text">
            {review?.positive}
          </p>
          <p className="review__text">
            {review?.negative}
          </p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet={review?.user.avatarUrl}
            />
            <img
              src={review?.user.avatarUrl}
              srcSet={review?.user.avatarUrl}
              width={162}
              height={162}
              alt={review?.user.name}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
