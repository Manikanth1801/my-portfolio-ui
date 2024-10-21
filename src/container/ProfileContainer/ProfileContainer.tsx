import React, { useContext, useEffect, useState } from 'react';
import { Descriptions, Spin, message } from 'antd';
import { GlobalContext } from '../../context/GlobalProvider';
import axiosInstance from '../../utils/axiosInstance';


type Profile = {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  gender: string;
};

const ProfileContainer: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { authToken } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get('accounts/profile/');
        setProfile(response.data);
      } catch (error) {
        message.error('Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };

    if (authToken) {
      fetchProfile();
    }
  }, [authToken]);

  if (loading) {
    return <Spin size="large" style={{ display: 'block', margin: '100px auto' }} />;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2>Profile Information</h2>
      {profile && (
        <Descriptions bordered>
          <Descriptions.Item label="First Name">{profile.first_name}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{profile.last_name}</Descriptions.Item>
          <Descriptions.Item label="Email">{profile.email}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">{profile.dob}</Descriptions.Item>
          <Descriptions.Item label="Gender">{profile.gender}</Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
};

export default ProfileContainer;
