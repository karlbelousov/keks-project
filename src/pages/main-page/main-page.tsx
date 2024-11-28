import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import LastRewiew from '../../components/last-review/last-review';
import MapAddressList from '../../components/map-address-list/map-address-list';
import RandomMain from '../../components/random-main/random-main';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RandomMain />
        <LastRewiew />
        <MapAddressList />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
