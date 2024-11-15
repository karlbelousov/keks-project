import BackLink from '../../components/back-link/back-link';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductDetails from '../../components/product-details/product-details';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import ReviewSort from '../../components/review-sort/review-sort';

function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка товара</h1>
        <BackLink />
        <ProductDetails />
        <ReviewForm />
        <ReviewSort />
        <ReviewList />
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;
