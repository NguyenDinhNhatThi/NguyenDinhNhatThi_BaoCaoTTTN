import home from "../pages/frontend/home";
import Detail from "../pages/frontend/product/Detail";
import Login from "../pages/frontend/user/Login";
import Register from "../pages/frontend/user/Register";
const RouterPublic=[
    {path:'/',component:home},
    {path:'/san-pham',component:home},
    {path:'/login',component:Login},
    {path:'/register',component:Register},


    {path:'/chi-tiet-san-pham/:slug',component:Detail},
];

export default RouterPublic;