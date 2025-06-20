import './App.css';
import MainHeader from '../src/components/header/MainHeader';
import BannerSection from './components/banner/BannerSection';
import BannerBgImages from './components/banner/BannerBgImages';
import MainContentSection from './components/contentsections/MainContentSection';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <div className="App">
        <BannerBgImages />
        <MainHeader />
        <BannerSection />
        <MainContentSection />
        <FooterMain />
    </div>
  );
}

export default App;
