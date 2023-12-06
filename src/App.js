import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'rc-slider/assets/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BaseRoute from './BaseRoute';

function App() {
  return (
    <div className="App">
      <BaseRoute/> 
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
  </div>
  );
}

export default App;
