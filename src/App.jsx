import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from './api/apiSlice';
import './App.css'
import Dashboard from './components/Dashboard';

function App() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.api.data);
  // const status = useSelector((state) => state.api.status);
  // const error = useSelector((state) => state.api.error);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  return (
    <>
    {/* {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        // <pre>{JSON.stringify(data, null, 2)}</pre>
      )} */}
    <Dashboard/>

    </>
  )
}

export default App
