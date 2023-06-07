import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { App, Greeting } from './pages/'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'greeting',
        element: <Greeting />
      }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
