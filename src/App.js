import { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='bg'>
      <Layout />
    </div>
  );
}

export default App;
