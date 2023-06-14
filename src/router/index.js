import { createBrowserRouter } from 'react-router-dom'
import { unauthRoutes } from 'modeles/unauthenticated/routes'
import { authRoutes } from 'modeles/authenticated/routes'

export const router = createBrowserRouter([...unauthRoutes, ...authRoutes])
