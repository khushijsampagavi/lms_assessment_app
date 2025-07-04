import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const TeacherLogin = () => {
  const backgroundStyle = {
    backgroundImage: 'url( https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px',
  };

  const inputStyle = {
    height: '50px',
    fontSize: '1.2rem',
    backgroundColor: '#f8f9fa', // Lighter background color
    color: '#212529', // Dark text color
    border: '2px solid #6c757d', // Border color
  };

  const labelStyle = {
    fontSize: '1.2rem',
    color: 'black', 
  };

  return (
    <div style={backgroundStyle}>
      <div className="text-center mb-4">
      <i class="fa-solid fa-chalkboard-user"></i>
      </div>
      <h1>{logType} LOGIN</h1><br/>
      <form className="w-100" style={{ maxWidth: '800px' }}>
        <div className="form-row d-flex justify-content-center">
          <div className="form-group col-md-5 mr-3">
            <label htmlFor="email" style={labelStyle}>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
              style={inputStyle}
            />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="form-group col-md-5 ml-3">
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
              style={inputStyle}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '10px 20px' }}>Back</button>
          <button type="submit" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '10px 20px' }}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default TeacherLogin;

