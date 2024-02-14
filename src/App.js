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
import FormPrilakuKerja from './components/FormPrilakuKerja';
import EditPage from './components/EditPage';
import EditIdentitas from './components/EditIdentitas';
import EditRHKIntervensi from './components/EditRHKIntervensi';
import EditRHK from './components/EditRHK';
import EditPrilakuKerja from './components/EditPrilakuKerja';

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
        <Route path="/edit/:id" element={(
          <>
            <Navbar/>
            <EditPage/>
            <Footer/>
          </>
        )} />
        <Route path="/edit/identitas/:id" element={(
          <>
            <Navbar/>
            <EditIdentitas/>
            <Footer/>
          </>
        )} />
        <Route path="/edit/intervensi/:id" element={(
          <>
            <Navbar/>
            <EditRHKIntervensi/>
            <Footer/>
          </>
        )} />
        <Route path="/edit/rhk/:id" element={(
          <>
            <Navbar/>
            <EditRHK/>
            <Footer/>
          </>
        )} />
        <Route path="/edit/prilaku-kerja/:id" element={(
          <>
            <Navbar/>
            <EditPrilakuKerja/>
            <Footer/>
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
        <Route path="/form-prilaku-kerja/:id" element={(
          <>
            <Navbar/>
            <FormPrilakuKerja/>
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
