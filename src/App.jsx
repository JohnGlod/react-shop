//import logo from './logo.svg';
import { Header } from "./layout/Header";
import { Shop } from "./layout/Shop";
import { Footer } from "./layout/Footer";

const App = () => {
  return (
    <div className='page'>
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
