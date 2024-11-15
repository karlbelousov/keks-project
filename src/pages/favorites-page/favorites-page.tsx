import { Link } from 'react-router-dom';
import BackLink from '../../components/back-link/back-link';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoutes } from '../../const';

function FavoritesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <BackLink />
          <section className="number-of-favourites favorites-page__qty">
            <div className="container">
              <h2 className="visually-hidden">Количество товаров в избранном.</h2>
              <p className="number-of-favourites__cakes">2 кекса</p>
              <div className="number-of-favourites__wrapper">
                <div className="number-of-favourites__wrap-price">
                  <p className="number-of-favourites__text">Всего</p>
                  <p className="number-of-favourites__price">13&nbsp;400&nbsp;р</p>
                </div>
              </div>
              <div className="number-of-favourites__button">
                <Link className="btn" to={AppRoutes.Catalog}>В каталог</Link>
              </div>
            </div>
          </section>
          <section className="favourites">
            <div className="container">
              <h2 className="visually-hidden">Избранные товары</h2>
              <div className="favourites__button">
                <button className="btn btn--second" type="button">Очистить</button>
              </div>
            </div>
            <section className="catalog">
              <div className="container">
                <h2 className="visually-hidden">Каталог</h2>
                <div className="catalog__wrapper">
                  <ul className="catalog__list">
                    <li className="catalog__item">
                      <div className="card-item card-item--big">
                        <a className="card-item__img-link" href="#">
                          <div className="card-item__img-wrapper">
                            <picture>
                              <source type="image/webp" srcSet="img/content/lemon-cheesecake.webp, img/content/lemon-cheesecake@2x.webp 2x" /><img src="img/content/lemon-cheesecake.jpg" srcSet="img/content/lemon-cheesecake@2x.jpg 2x" width={326} height={332} alt="Чизкейк лимонный." />
                            </picture>
                          </div>
                          <span className="card-item__label">Новинка</span>
                        </a>
                        <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                          <svg width={51} height={41} aria-hidden="true">
                            <use xlinkHref="#icon-like" />
                          </svg>
                        </button><span className="card-item__price">4 100 p</span>
                        <a className="card-item__link" href="#">
                          <h3 className="card-item__title">
                            <span>Чизкейк лимонный</span>
                          </h3>
                        </a>
                      </div>
                    </li>
                    <li className="catalog__item">
                      <div className="card-item card-item--big">
                        <a className="card-item__img-link" href="#">
                          <div className="card-item__img-wrapper">
                            <picture>
                              <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" /><img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width={326} height={332} alt="Торт голубика." />
                            </picture>
                          </div>
                          <span className="card-item__label">Новинка</span>
                        </a>
                        <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                          <svg width={51} height={41} aria-hidden="true">
                            <use xlinkHref="#icon-like" />
                          </svg>
                        </button><span className="card-item__price">9 300 p</span>
                        <a className="card-item__link" href="#">
                          <h3 className="card-item__title">
                            <span>Торт Голубика</span>
                          </h3>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavoritesPage;
