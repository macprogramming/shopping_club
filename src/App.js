import './App.css';
import Header from './common/Header';
import Home from './static/Home';
import Footer from './common/Footer';
//import "~slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"
//import "~slick-carousel/slick/slick-theme.css";
//import "../node_modules/slick-carousel/slick-theme.css"
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
