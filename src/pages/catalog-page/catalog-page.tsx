import BackLink from '../../components/back-link/back-link';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import ProductCard from '../../components/product-card/product-card';
import { useAppSelector } from '../../hooks';
import { getIsProductsLoading, getProducts } from '../../store/site-data/selectors';

function CatalogPage() {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(getProducts);

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackLink />
        <CatalogFilter />
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              {isProductsLoading ? <Loader /> : (
                <>
                  <ul className="catalog__list">
                    {products.map((product) => (
                      <li className='catalog__item' key={product.id}>
                        <ProductCard product={product} isBig />
                      </li>
                    ))}
                  </ul>
                  <div className="catalog__button-wrapper">
                    <button className="btn btn--second" type="button">
                      Показать еще
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CatalogPage;
