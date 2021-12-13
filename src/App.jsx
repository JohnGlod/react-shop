//import logo from './logo.svg';
import { Header } from "./layout/Header";
import { Shop } from "./layout/Shop";
import { Footer } from "./layout/Footer";

import { ContextProvider } from "./context";

const App = () => {
  return (
    <div className='page'>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
