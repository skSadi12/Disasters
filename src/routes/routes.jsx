import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import Incidents from "../page/Incidents";
import Progress from "../components/progress";
import NewIncident from "../components/NewIncident";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <Error>404</Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/incidents",
        element:<Incidents/>,
      },
      {
        path:"/incidents/progress",
        element:<Progress/>,
      },
      {
        path:"/incidents/progress/NewIncident",
        element:<NewIncident/>,
      },
      
    //   {
    //     path: "/about",
    //     element: <about />,
    //   },
    ],
  },
]);
