import React, { useEffect } from "react";
import { useState } from "react";

const StudentStorage = () => {
    const [formData,setFormData] = useState([]);

const StudentData = [
    {
        id: 1,
        firstName: "Vedant",
        lastName: "Mishra",
        emailId:"vedant@gmail.com",
        address: "123 Main St",
        contactNumber: "9123456780",
        dateOfBirth: "2010-01-01",
        organization: "JSS CBSE School",
        grade: "9th",
        password: "123",
        isLoggedIn: false,
      },
      {
        id: 2,
        firstName: "Veeresh",
        lastName: "S",
        emailId:"veeresh@gmail.com",
        address: "456 Elm St",
        contactNumber: "9876543210",
        dateOfBirth: "2010-05-15",
        organization: "KMS",
        grade: "10th",
        password: "456",
        isLoggedIn: false,
      },
      {
        id: 3,
        firstName: "Binod",
        lastName: "Jassi",
        emailId:"binod@gmail.com",
        address: "789 Oak St",
        contactNumber: "9056743121",
        dateOfBirth: "2010-12-25",
        organization: "KRCES",
        grade: "11th",
        password: "789",
        isLoggedIn: false,
      },
      {
        id: 4,
        firstName: "Kavana",
        lastName: "Batti",
        emailId:"kavana@gmail.com",
        address: "101 Pine St",
        contactNumber: "999956784",
        dateOfBirth: "2010-09-30",
        organization: "KV",
        grade: "12th",
        password: "101",
        isLoggedIn: false,
      },
      {
        id: 5,
        firstName: "Mishti",
        lastName: "Wilson",
        emailId:"mishti@gmail.com",
        address: "202 Maple St",
        contactNumber: "7776329801",
        dateOfBirth: "2010-03-20",
        organization: "JSS CBSE School",
        grade: "9th",
        password: "202",
        isLoggedIn: false,
      },
 
];

    useEffect(() => {
        setFormData(StudentData);
        localStorage.setItem("studentList", JSON.stringify(StudentData));
    }, []);

    useEffect(()=>{
        console.log("Student List : ",formData);
    }, [formData]);

    return null;
};

export default StudentStorage;
  