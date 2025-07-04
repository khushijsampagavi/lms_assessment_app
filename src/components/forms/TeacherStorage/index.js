import React, { useEffect } from "react";
import { useState } from "react";

const TeacherStorage = () => {
    const [teacherList,setTeacherList] = useState([]);

const teacherData = [
  {
    id: 1,
    firstName: "Heena",
    lastName: "Khanna",
    organization: "KLE College",
    joiningDate: "2023-01-01",
    address: "123 Main St, Mumbai",
    emailId:"heena@gmail.com",
    password:"123"
  },
  {
    id: 2,
    firstName: "Madhuri",
    lastName: "Kulkerni",
    organization: "JSS College",
    joiningDate: "2023-02-01",
    address: "456 Elm St, Pune",
    emailId:"madhuri@gmail.com",
    password:"456"
  },
  {
    id: 3,
    firstName: "Kavya",
    lastName: "Bhosle",
    organization: "KUD University",
    joiningDate: "2023-03-01",
    address: "789 Oak St, Bangaluru",
    emailId:"kavya@gmail.com",
    password:"789"
  },
  {
    id: 4,
    firstName: "Mahant",
    lastName: "Bhatt",
    organization: "Mysore University",
    joiningDate: "2023-04-01",
    address: "101 Pine St, Kolkatta",
    emailId:"mahant@gmail.com",
    password:"101"
  },
  {
    id: 5,
    firstName: "Karan",
    lastName: "Dav",
    organization: "KLE College",
    joiningDate: "2023-05-01",
    address: "202 Maple St, Delhi",
    emailId:"karan@gmail.com",
    password:"202"
  },
];

    useEffect(() => {
        setTeacherList(teacherData);
        localStorage.setItem("teacherList", JSON.stringify(teacherData));
    }, []);

    useEffect(()=>{
        console.log("Teacher List : ",teacherList);
    }, [teacherList]);

    return null;
};

export default TeacherStorage;
