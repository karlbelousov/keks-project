import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import LastRewiew from '../../components/last-rewiew/last-review';
import Map from '../../components/map/map';
import RandomMain from '../../components/random-main/random-main';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RandomMain />
        <LastRewiew />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
