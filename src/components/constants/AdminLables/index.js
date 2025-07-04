import QuestionManagement from "../../pages/QuestionManagement";
import StudentManagement from "../../pages/StudentManagement";
import TeacherManagement from "../../pages/TeacherManagement";
import TestManagement from "../../pages/TestManagement";
import Dashboard from "../../pages/Dashboard";
import QuestionDashboard from "../../pages/QuestionDashboard";
import TakeAssessment from "../../pages/TakeAssesment";
import LogType from "../../pages/LogType";

const AdminLables = [
   {
        element:<Dashboard/>,
        path:'/dashboard',
        label:'Dashboard',
    },
    {
        element:<QuestionDashboard/>,
        path:'/QuestionManagement',
        label:'questionmanagement',
    },
    {
        element:<StudentManagement/>,
        path:'/StudentManagement',
        label:'studentmanagement',
    },
    {
        element:<TeacherManagement/>,
        path:'/TeacherManagement',
        label:'teachermanagement',
    },
    {
        element:<TestManagement/>,
        path:'/TestManagement',
        label:'testmanagement',
    },
    {
        element:<TakeAssessment/>,
        path:'/TakeAssesment',
        label:'testmanagement',
    },
    {
        element:<LogType/>,
        path:'/LogType',
        label:'login',
    },  
];

export { AdminLables };
