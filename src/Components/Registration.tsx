import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dpUrl, setDpUrl] = useState('');
  const [displayFullForm, setDisplayFullForm] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make API call to verify email and send OTP
      // If email is verified, set displayFullForm to true
      setDisplayFullForm(true);
    } catch (error) {
      setError('An error occurred');
    }
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make API call to complete registration
      // Redirect or handle successful registration
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        {displayFullForm ? (
          <>
            <h2 className="text-2xl font-bold mb-4">User Registration</h2>
            <form onSubmit={handleRegistration} className="space-y-4">
              <div className="form-group">
                <label htmlFor="otp" className="block font-semibold">OTP:</label>
                <input type="text" id="otp" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="block font-semibold">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile" className="block font-semibold">Mobile:</label>
                <input type="text" id="mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter your mobile number" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="block font-semibold">Gender:</label>
                <input type="text" id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter your gender" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="form-group">
                <label htmlFor="dpUrl" className="block font-semibold">DP URL:</label>
                <input type="text" id="dpUrl" name="dpUrl" value={dpUrl} onChange={(e) => setDpUrl(e.target.value)} placeholder="Enter your DP URL" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Registration Page</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label htmlFor="email" className="block font-semibold">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Check Email</button>
            </form>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </>
        )}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
