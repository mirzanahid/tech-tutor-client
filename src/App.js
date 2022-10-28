
import { RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { router } from './routes/Routes';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div className={dark}>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
