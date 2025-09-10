import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();


  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(newOtp);
      setOtpSent(true);

      Swal.fire({
        icon: "info",
        title: "OTP Sent",
        text: `Your OTP is: ${newOtp}`, 
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Number",
        text: "Please enter a valid 10-digit mobile number",
      });
    }
  };

  // Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === generatedOtp && otp !== '') {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/"); 
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please enter the correct OTP",
      });
    }
  };

  return (
    <div className="backguondes">
      <form id="Login" className="formes">
        <div className="leftsides">
          <div className="underdiv">
            <p>Hello, Welcome!</p>
            <span class="text-white" >Don't have an account?</span>
          </div>
        </div>

        <div className="rightsides">
          <div>
            <h1>Login with OTP</h1>

            {/* Mobile Input */}
            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            {/* Send OTP */}
            {!otpSent && (
              <button onClick={handleSendOtp}>Send OTP</button>
            )}

            {/* OTP Input */}
            {otpSent && (
              <>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={handleVerifyOtp}>Verify OTP</button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
