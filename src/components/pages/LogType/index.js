import React, { useState } from "react";
import Login from "../StudentLogin";

const LogType = () => {
  const [selectedUserType, setSelectedUserType] = useState("");
  const backgroundStyle = {
    backgroundImage:
      "url( https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    fontSize: "2rem",
    padding: "20px 40px",
    margin: "20px",
  };

  return (
    <>
      {!selectedUserType ? (
        <div style={backgroundStyle}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h1>Which Type Of User You Are?</h1>

                <button
                  className="btn btn-success"
                  style={buttonStyle}
                  onClick={() => setSelectedUserType("STUDENT")}
                >
                  Student
                </button>
                <button
                  className="btn btn-warning"
                  style={buttonStyle}
                  onClick={() => setSelectedUserType("TEACHER")}
                >
                  Teacher
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login logType={selectedUserType} changeUserType={setSelectedUserType} />
      )}
    </>
  );
};
export default LogType;

