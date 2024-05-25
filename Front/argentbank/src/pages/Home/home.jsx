// Home.jsx
// This page displays the home content and promotional features.

import React from "react";
import Footer from "../../components/Footer/footer";
import HomeBanner from "../../components/HomeBanner/homeBanner";
import Navigation from "../../components/Navigation/navigation";
import { useSelector } from "react-redux";
import { getProfile } from "../../services/api";

const Home = () => {
  const [firstName, setFirstName] = React.useState("");
  const token = useSelector((state) => state.token.token);

  React.useEffect(() => {
    // If user connected, fetch profile to get first name
    if (token) {
      const fetchProfile = async () => {
        try {
          const response = await getProfile(token);
          setFirstName(response.data.body.firstName);
        } catch (error) {
          console.error("Failed to fetch profile", error);
        }
      };
      fetchProfile();
    }
  }, [token]);

  return (
    <>
      <Navigation firstName={firstName} />
      <HomeBanner />
      <Footer />
    </>
  );
};

export default Home;
