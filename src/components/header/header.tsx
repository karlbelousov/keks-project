import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link
            className="header__logo"
            to={AppRoutes.Main}
            aria-label="Переход на главную"
          >
            <img
              src="img/svg/logo.svg"
              width={170}
              height={69}
              alt="Кондитерская кекс"
            />
          </Link>
          <div className="header__buttons">
            <div className="header__btn">
              <Link
                className="btn btn--third header__link header__link--reg"
                to={AppRoutes.Register}
              >
                Регистрация
              </Link>
            </div>
            <div className="header__btn">
              <Link className="btn" to={AppRoutes.Login}>
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
