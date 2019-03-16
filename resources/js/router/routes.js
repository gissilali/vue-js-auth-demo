import Login from "../pages/Login";
import Landing from "../pages/Landing"
const routes = [
    {
        "path" : "/",
        "component" :  Landing
    },
    {
        "path" : "/login",
        "component": Login,
        "beforeEnter" : (to, from, next) => {
            next()
        }
    },
    {
        path: '*'
    }
];

export default routes