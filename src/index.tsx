import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import store from './redux/store'
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import axios from 'axios'
import { useAppSelector } from './redux/hooks'
import { selectUserAccessToken } from './redux/reducers/userSlice'

const HeadersAuth = (): void => {
  const jwt = useAppSelector(selectUserAccessToken)
  // axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
  axios.defaults.baseURL = 'https://imoogoo.com/api'
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  axios.defaults.headers.Authorization = `Bearer ${jwt}`
}
console.log(HeadersAuth)
const persistor = persistStore(store)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
