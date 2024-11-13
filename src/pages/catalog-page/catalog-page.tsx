import BackLink from '../../components/back-link/back-link';
import Catalog from '../../components/catalog/catalog';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackLink />
        <CatalogFilter />
        <Catalog />
      </main>
      <Footer />
    </>
  );
}

export default CatalogPage;
