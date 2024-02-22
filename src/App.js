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
import ListDataStructural from './components/ListDataStructural';
import FormIdentitasStructure from './components/FormIdentitasStructure';
import FormRHKStructure from './components/FormRhkStructure';
import FormIndikatorKinerja from './components/FormIndikatorKinerja';
import FormPrilakuKerjaStructure from './components/FormPrilakuKerjaStructure';
import SearchDataStructure from './components/SearchDataStructure';

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
        <Route path="/search-structure" element={(
          <>
            <Navbar/>
            <SearchDataStructure/>
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
        <Route path="/form-identitas-structure" element={(
          <>
            <Navbar/>
            <FormIdentitasStructure/>
            <Footer/>
          </>
        )} />
        <Route path="/form-rhk-structure/:id" element={(
          <>
            <Navbar/>
            <FormRHKStructure/>
            <Footer/>
          </>
        )} />
        <Route path="/form-indikator-kinerja-structure/:id" element={(
          <>
            <Navbar/>
            <FormIndikatorKinerja/>
            <Footer/>
          </>
        )} />
        <Route path="/form-prilaku-kerja-structure/:id" element={(
          <>
            <Navbar/>
            <FormPrilakuKerjaStructure/>
            <Footer/>
          </>
        )} />
        <Route path="/list/:id" element={(
          <>
            <Navbar/>
            <ListData/>
          </>
        )} />
        <Route path="/list-structure/:id" element={(
          <>
            <Navbar/>
            <ListDataStructural/>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
