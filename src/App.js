import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
