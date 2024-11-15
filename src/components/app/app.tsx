import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoutes } from '../../const';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ErrorPage from '../../pages/error-page/error-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import ProductPage from '../../pages/product-page/product-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';

function App(): JSX.Element {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainPage />} />
          <Route path={AppRoutes.Catalog} element={<CatalogPage />} />
          <Route path={AppRoutes.Favorites} element={<FavoritesPage />} />
          <Route path={AppRoutes.Product} element={<ProductPage />} />
          <Route path={AppRoutes.Login} element={<LoginPage />} />
          <Route path={AppRoutes.Register} element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
