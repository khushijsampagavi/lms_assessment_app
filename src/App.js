import { AdminRoutes, WebsiteRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import TestStorage from "./components/pages/TestStorage";
import QuestionStorage from "./components/pages/QuestionStorage";
import TeacherStorage from "./components/forms/TeacherStorage";
import LayoutSidebar from "./components/pages/LayoutSidebar";
import { UserContext } from "./context/useUser";
import { useState } from "react";
import { LoginContext } from "./context/useLoginType";
import StudentStorage from "./components/forms/StudentStorage";

function App() {
  const [user, setUser] = useState(null);
  const [loginType, setLoginType] = useState("");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <LoginContext.Provider value={{loginType, setLoginType}}>
        <BrowserRouter>
          <TestStorage />
          <QuestionStorage />
          <TeacherStorage />
          <StudentStorage/>
          {user === null ? (
            <>
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="/" className="mr-auto">
                    Learning Management System
                  </Navbar.Brand>
                  <Nav className="mx-auto">
                    <Nav.Link href="/">Homepage</Nav.Link>
                    <Nav.Link href="/Plans">Plans</Nav.Link>
                  </Nav>
                  <Button
                    variant="outline-primary"
                    className="ml-auto"
                    href="/Login"
                  >
                    Log in
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    className="ml-auto"
                    href="/Register"
                  >
                    Register
                  </Button>
                </Container>
              </Navbar>
              <WebsiteRoutes></WebsiteRoutes>
            </>
          ) : (
            <LayoutSidebar>
              <AdminRoutes></AdminRoutes>
            </LayoutSidebar>
          )}
        </BrowserRouter>
        </LoginContext.Provider>
      </UserContext.Provider>
    </>
  );
}
export default App;
