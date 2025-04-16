
// import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar'; // Your existing Navbar component
// import Loader from './loader/Loader';
// import { Box, Typography } from '@mui/material';
// import './App.css';
// import Dashboard from './components/Dashboard';
// import Slidenavbar from './components/Slidenavbar';

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // Adjust the delay time as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {loading && <Loader />}
//       {!loading && (
//         <>

//            <Navbar />
//           <Box sx={{ mt: '5.5em' }}> 
//             <Dashboard />
//           </Box>
//           <Slidenavbar /> 


//         </>
//       )}
//     </div>
//   );
// };

// export default App;




import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Loader from './loader/Loader';
import Slidenavbar from './components/Slidenavbar';
import BlogPage from './components/BlogPage';

import { Box } from '@mui/material';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Navbar />
          <Box sx={{ mt: '5.5em' }}>
            <Routes>
            <Route path="/" element={<Dashboard/>} />

              <Route path="/blogs" element={<BlogPage />} />
              {/* <Route path="/blogs/:id" element={<BlogPage />} /> */}
              <Route path="/blogs/:slug" element={<BlogPage />} />

            </Routes>
          </Box>
          <Slidenavbar />
        </Router>
      )}
    </div>
  );
};

export default App;


