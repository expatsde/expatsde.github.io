import MainLayout from "./layout/MainLayout";
import InputForm from "./components/Input";
import Pricing from "./components/Pricing";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";

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
    component: Hero,
  },
  {
    path: "/form/:title",
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
