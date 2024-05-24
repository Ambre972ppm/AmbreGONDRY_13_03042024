import React, { useEffect, useState } from "react";
import AccountContainer from "../../components/AccountContainer/accountContainer";
import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";
import ProfileHeader from "../../components/ProfileHeader/profileHeader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../services/api";

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [newUserName, setNewUserName] = useState({});
  const { token } = useSelector((state) => state.token);
  const { remember } = useSelector((state) => state.remember);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        setUserProfile(response.data.body);
      } catch (error) {
        navigate('/sign-in');
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, navigate]);

  useEffect(() => {
    const updateUserName = async () => {
      if (newUserName.firstName && newUserName.lastName) {
        try {
          await updateProfile(token, newUserName);
          const response = await getProfile(token);
          setUserProfile(response.data.body);
        } catch (error) {
          console.error(error);
        }
      }
    };

    updateUserName();
  }, [newUserName, token]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
      <Navigation firstName={userProfile.firstName} />
      <main className="main">
        <ProfileHeader firstName={userProfile.firstName} lastName={userProfile.lastName} setNewUserName={setNewUserName} />
        <AccountContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
