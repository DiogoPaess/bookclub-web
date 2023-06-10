import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen
} from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/signup',
    element: <RegisterScreen />
  },

  {
    path: '/reset-password',
    element: <ResetPasswordScreen />
  }
]
