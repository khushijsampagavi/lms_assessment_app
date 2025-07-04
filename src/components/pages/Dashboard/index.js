import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./index.css";
import PieChart from "../../molecules/PieChart";
import { useUser } from "../../../context/useUser";

const DashboardCard = ({ title, count }) => {
  return (
    <Card className="dashboard-card">
      <Card.Body>
        <Card.Text className="text-muted">{title}</Card.Text>
        <Card.Title>{count}</Card.Title>
      </Card.Body>
    </Card>
  );
};

const Dashboard = () => {
  const [teacherCount, setTeacherCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [organizationCount, setOrganizationCount] = useState(0);
  const [allCoursesCount, setAllCoursesCount] = useState(0);
  const { user } = useUser(); 

  useEffect(() => {
    const teacherList = JSON.parse(localStorage.getItem("teacherList")) || [];
    setTeacherCount(teacherList.length);

    const studentList = JSON.parse(localStorage.getItem("studentList")) || [];
    setStudentCount(studentList.length);

    const allCourses = JSON.parse(localStorage.getItem("testList")) || [];
    setAllCoursesCount(allCourses.length);
  }, []);

  useEffect(() => {
    setOrganizationCount(teacherCount + studentCount);
  }, [teacherCount, studentCount]);

  return (
    <Container className="dashboard-container">
      <Row className="mt-3">
        <Col md={12} >
          <Card className="welcome-card">
            <Card.Body>
              <Card.Title as="h1">Welcome {user.firstName}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}>
          <DashboardCard title="All Courses" count={allCoursesCount} />
        </Col>
        <Col md={3}>
          <DashboardCard title="Organization Users" count={organizationCount} />
        </Col>
        <Col md={3}>
          <DashboardCard title="Teacher Users" count={teacherCount} />
        </Col>
        <Col md={3}>
          <DashboardCard title="Student Users" count={studentCount} />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={12}>
          <div className="pie-chart">
            <PieChart
              labels={["All Courses", "Organization Users", "Teacher Users", "Student Users"]}
              series={[allCoursesCount, organizationCount, teacherCount, studentCount]}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
