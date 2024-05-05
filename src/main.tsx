import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store.tsx'
import { Provider } from 'react-redux' // 2 store ko laao aur provider lao redux se
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
 
  </React.StrictMode>,
)
