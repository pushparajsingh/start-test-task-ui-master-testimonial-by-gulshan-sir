import React from 'react';
import Layout from './Components/Layout/Layout'
import LandingPage from './Pages/LandingPage/LandingPage'
import ManageTestimonial from './Pages/ManageTestimonial/ManageTestimonial'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
      <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/manage-testimonial" element={<ManageTestimonial />} />
          </Routes>
        </Layout>
      </Router>
  );
}
export default App;
