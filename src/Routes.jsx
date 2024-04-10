import MainLayout from "./layout/MainLayout";
import InputForm from "./components/Input";
import Pricing from "./components/Pricing";
import Dashboard from "./components/Dashboard";

const routes = [
  //   {
  //     path: "/",
  //     exact: true,
  //     layout: MainLayout,
  //     component: Home,
  //   },
  {
    path: "/",
    exact: true,
    layout: MainLayout,
    component: Dashboard,
  },
  {
    path: "/form",
    exact: true,
    layout: MainLayout,
    component: InputForm,
  },
  {
    path: "/pricing",
    exact: true,
    layout: MainLayout,
    component: Pricing,
  },
];

export default routes;
