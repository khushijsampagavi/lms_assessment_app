import React, { useEffect, useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useUser } from '../../../context/useUser';
import { useLoginType } from '../../../context/useLoginType';

const Login = ({ logType, changeUserType }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const { user, setUser } = useUser();
  const {loginType, setLoginType} = useLoginType();
  const backgroundStyle = {
    backgroundImage:
      "url( https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px",
  };
  const inputStyle = {
    height: "50px",
    fontSize: "1.2rem",
    backgroundColor: "#f8f9fa", // Lighter background color
    color: "#212529", // Dark text color
    border: "2px solid #6c757d", // Border color
    height: '50px',
    fontSize: '1.2rem',
    backgroundColor: '#f8f9fa',
    color: '#212529',
    border: '2px solid #6c757d', 
  };
  const labelStyle = {
    fontSize: "1.2rem",
    color: "black",
  };

  useEffect(() => {
    if (logType === "TEACHER") {
      const teacherList = JSON.parse(localStorage.getItem("teacherList")) || [];
      setUserInfo(teacherList);
    } else if (logType === "STUDENT") {
      const studentList = JSON.parse(localStorage.getItem("studentList")) || [];
      setUserInfo(studentList);
    }
  }, [logType]);

  const verifyLogin = (e) => {
    e.preventDefault();
    const user = userInfo.find(
      (user) =>
        formData.emailId === user.emailId && formData.password == user.password
    );

    if (user) {
      console.log("Login successful");
      setUser(user);
      setLoginType(logType);
    } else {
      console.log("Login unsuccessful");
    }
    console.log(formData);
  };
  return (
    <div style={backgroundStyle}>
      <div className="text-center mb-4">
        <i class="fa-solid fa-chalkboard-user"></i>
      </div>
      <h1>{logType} LOGIN</h1>
      <br />
      <form className="w-100" style={{ maxWidth: "800px" }}>
        <div className="form-row d-flex justify-content-center">
          <div className="form-group col-md-5 mr-3">
            <label htmlFor="email" style={labelStyle}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, emailId: e.target.value }))
              }
              required
              style={inputStyle}
            />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="form-group col-md-5 ml-3">
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
              style={inputStyle}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ fontSize: "1.2rem", padding: "10px 20px" }}
            onClick={() => changeUserType("")}
          >
            Back
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="submit"
            className="btn btn-primary"
            style={{ fontSize: "1.2rem", padding: "10px 20px" }}
            onClick={verifyLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

