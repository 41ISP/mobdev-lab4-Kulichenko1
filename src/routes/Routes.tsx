import { createBrowserRouter} from 'react-router-dom'
import FeedPage from '../pages/FeedPage'
export const router = createBrowserRouter([
    {
      path: "/",
      element: <FeedPage/>,
    },
    ])