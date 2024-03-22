import Header from './header/header';
import HeaderContact from './header-contact/contact-header';
import Footer from './footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {
  return (
    <>
      <HeaderContact/>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
