
import { RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { router } from './routes/Routes';

function App() {
  return (
    <div className='App' >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
