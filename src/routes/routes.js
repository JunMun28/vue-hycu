import MainPage from "../views/MainPage.vue";
import ResultLayout from "../views/Layout/ResultLayout.vue";

const routes = [
  {
    path: "/",
    component: MainPage
  },
  {
    path: "/result",
    redirect: "raw-data",
    component: ResultLayout,
    children: [
      {
        path: "/raw-data",
        name: "raw-data",
        component: () => import("../views/RawData.vue")
      },
      {
        path: "/detailed-data",
        name: "detailed-data",
        component: () => import("../views/DetailedData.vue")
      }
    ]
  }
];

export default routes;
