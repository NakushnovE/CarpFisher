import {SESSION_ROUTE} from "./utils/consts";

import SessionPage from "./pages/SessionPage"


/*export const authRoutes = [
    {
        path: './admin',
        Component: Admin
    }
]*/

export const publicRoutes = [
    {
        path: SESSION_ROUTE,
        Component: SessionPage
    },

]