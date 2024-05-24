// Home.jsx
// This page displays the home content and promotional features.

import { useEffect } from "react";
import Footer from "../../components/Footer/footer";
import HomeBanner from "../../components/HomeBanner/homeBanner";
import Navigation from "../../components/Navigation/navigation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If user is connected, navigate to their dashboard
    if (localStorage.getItem('token') !== null || sessionStorage.getItem('token') !== null) {
      navigate('/profile');
    }
  }, [navigate]);

  return (
    <>
      <Navigation />
      <HomeBanner />
      <Footer />
    </>
  );
}

export default Home;
