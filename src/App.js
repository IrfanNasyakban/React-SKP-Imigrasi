/* eslint-disable react/jsx-no-target-blank */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListData from './components/ListData';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FormIdentitas from './components/FormIdentitas';
import FormRHKIntervensi from './components/FormRHKIntervensi';
import FormRHK from './components/FormRHK';
import Dashboard from './components/Dashboard';
import SearchData from './components/SearchData';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <>
            <Navbar/>
            <Dashboard/>
          </>
        )} />
        <Route path="/search" element={(
          <>
            <Navbar/>
            <SearchData/>
          </>
        )} />
        <Route path="/form-identitas" element={(
          <>
            <Navbar/>
            <FormIdentitas/>
            <Footer/>
          </>
        )} />
        <Route path="/form-rhk-intervensi/:id" element={(
          <>
            <Navbar/>
            <FormRHKIntervensi/>
            <Footer/>
          </>
        )} />
        <Route path="/form-rhk/:id" element={(
          <>
            <Navbar/>
            <FormRHK/>
            <Footer/>
          </>
        )} />
        <Route path="/list/:id" element={(
          <>
            <Navbar/>
            <ListData/>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
