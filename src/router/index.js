import { createBrowserRouter } from 'react-router-dom'
import { unauthRoutes } from 'modeles/unauthenticated/routes'

export const router = createBrowserRouter([...unauthRoutes])
