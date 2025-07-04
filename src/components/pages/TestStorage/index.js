import React, { useState, useEffect } from 'react';

const TestStorage = () => {
  const [testList, setTestList] = useState([]);

  const testDataArray = [
    {
      subjects: "Social Science",
      totalmarks: "40",
      totalqns: "5",
      passmarks: "18",
      starttime: "4:00",
      timeduration: "1.5hours",
      endtime: "5:30",
    },
    {
      subjects: "English",
      totalmarks: "50",
      totalqns: "6",
      passmarks: "20",
      starttime: "3:00",
      timeduration: "2hours",
      endtime: "5:00",
    },
    {
        subjects: "Science",
        totalmarks: "50",
        totalqns: "10",
        passmarks: "25",
        starttime: "2:00",
        timeduration: "2hours",
        endtime: "4:00",
      },
      {
        subjects: "English",
        totalmarks: "50",
        totalqns: "6",
        passmarks: "20",
        starttime: "3:00",
        timeduration: "2hours",
        endtime: "5:00",
      },
      {
        subjects: "Science",
        totalmarks: "50",
        totalqns: "6",
        passmarks: "20",
        starttime: "3:00",
        timeduration: "2hours",
        endtime: "5:00",
      },
  ];

  useEffect(() => {
    setTestList(testDataArray);
    localStorage.setItem("testList", JSON.stringify(testDataArray));
  }, []); 

  useEffect(() => {
    console.log("Test List:", testList);
  }, [testList]);

  return null;
};
export default TestStorage;
