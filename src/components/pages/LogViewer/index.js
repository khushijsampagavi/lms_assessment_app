import React, { useState, useEffect } from 'react';

async function fetchLogType() {
  try {
    const response = await fetch('api/logtypes'); 
    if (!response.ok) {
      throw new Error('Failed to fetch log types');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
async function fetchStudentLogin() {
  try {
    const response = await fetch('api/studentlogs'); 
    
    if (!response.ok) {
      throw new Error('Failed to fetch student log data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
async function fetchTeacherLogin() {
  try {
    const response = await fetch('api/teacherlogs'); 
    
    if (!response.ok) {
      throw new Error('Failed to fetch teacher login data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
function LogViewer() {
  const [logType, setLogType] = useState(null);
  const [teacherLog, setTeacherLog] = useState(null);
  const [studentLog, setStudentLog] = useState(null);
  useEffect(() => {
    fetchLogType()
    fetch('https://api.example.com/data')

      .then(data => setLogType(data))
      .catch(error => console.error('Error fetching log types:', error));

    fetchTeacherLogin()
      .then(data => setTeacherLog(data))
      .catch(error => console.error('Error fetching teacher login data:', error));

    fetchStudentLogin()
      .then(data => setStudentLog(data))
      .catch(error => console.error('Error fetching student log data:', error));
  }, []);
  return (
    <div>
      {logType && (
        <div>
          <h2>Log Types:</h2>
          <ul>
            {logType.map(type => (
              <li key={type.id}>{type.description}</li>
            ))}
          </ul>
        </div>
      )}
      {teacherLog && (
        <div>
          <h2>Teacher Logins:</h2>
          <ul>
            {teacherLog.map(log => (
              <li key={log.id}>{log.timestamp} - Teacher ID: {log.teacherId}</li>
            ))}
          </ul>
        </div>
      )}
      {studentLog && (
        <div>
          <h2>Student Logs:</h2>
          <ul>
            {studentLog.map(log => (
              <li key={log.id}>{log.timestamp} - Student ID: {log.studentId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default LogViewer;
