import { useAppSelector } from '../../hooks';
import { getIsLastReviewLoading, getLastReview } from '../../store/site-data/selectors';
import Loader from '../loader/loader';
import ReviewItem from '../review-item/review-item';

function LastRewiew() {
  const isLastReviewLoading = useAppSelector(getIsLastReviewLoading);
  const lastReview = useAppSelector(getLastReview);

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        {isLastReviewLoading ? <Loader /> : <ReviewItem review={lastReview} />}
      </div>
    </section>
  );
}

export default LastRewiew;
