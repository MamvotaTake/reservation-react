// import './App.css'
import GlobalStyles from './styles/GlobalStyles'
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Tables from './pages/Tables'
import Schedule from './pages/Schedule'
import Stock from './pages/Stock'
import Holidays from './pages/Holidays'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path='home' element={<Home/>}/>
            <Route path='tables' element={<Tables/>}/>
            <Route path='schedule' element={<Schedule/>}/>
            <Route path='stock' element={<Stock/>}/>
            <Route path='holidays' element={<Holidays/>}/>
            <Route path='calendar' element={<Calendar/>}/>
            <Route path='settings' element={<Settings />} />
            <Route path='*' element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
