import { Link } from 'react-router-dom';
import { getIsProductsLoading, getProducts } from '../../store/site-data/selectors';
import Loader from '../loader/loader';
import { AppRoutes } from '../../const';
import { useAppSelector } from '../../hooks';
import ProductCard from '../product-card/product-card';
import { getRandomElement } from '../../helpers';

function RandomMain() {
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const products = useAppSelector(getProducts);

  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        {isProductsLoading ? <Loader /> : (
          <ul className="random-main__list">
            <li className="random-main__item">
              <ProductCard product={getRandomElement(products)} />
            </li>
            <li className="random-main__item">
              <ProductCard product={getRandomElement(products)} />
            </li>
            <li className="random-main__item">
              <ProductCard product={getRandomElement(products)} />
            </li>
            <li className="random-main__item">
              <Link className="random-main__link" to={AppRoutes.Catalog}>
                <div className="random-main__icon-wrapper">
                  <div className="random-main__icon">
                    <svg width={120} height={130} aria-hidden="true">
                      <use xlinkHref="#icon-keks" />
                    </svg>
                  </div>
                </div>
                <h3 className="random-main__subtitle">Все кексы</h3>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default RandomMain;
