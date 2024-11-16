import { STARS_COUNT } from '../../const';

type StarRatingProps = {
  rating: number;
};

function StarRating({rating}: StarRatingProps) {
  return (
    <div className="star-rating">
      {Array.from({length: STARS_COUNT}, (_,i) => (
        <svg
          key={`Star ${STARS_COUNT - i}`}
          className={`star-rating__star ${rating > i ? 'star-rating__star--active' : ''}`}
          width={30}
          height={30}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-star" />
        </svg>
      ))}
    </div>
  );
}

export default StarRating;
