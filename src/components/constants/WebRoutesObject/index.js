import LogType from "../../pages/LogType";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import SubscriptionPage from "../../pages/SubscriptionPage";

const WebRoutesObject = [
    {
        element: <HomePage/>,
        path: "/",
        label: "HOME",
    },
    {
        element: <LogType/>,
        path: "/Login",
        label: "Log in",
    },
    {
        element: <RegistrationPage/>,
        path: "/Register",
        label: "REGISTER",
    },
    {
        element: <SubscriptionPage/>,
        path: "/Plans",
        label: "PLANS",
    },
]
export {WebRoutesObject};
