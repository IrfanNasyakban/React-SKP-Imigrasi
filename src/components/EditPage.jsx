import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/editPage.css";

const EditPage = () => {
  const [idIdentitas, setIdIdentitas] = useState("");
  const [namaPegawai, setNamaPegawai] = useState("");
  const [nipPegawai, setNipPegawai] = useState("");
  const [pngktAndGolRuangPegawai, setPngktAndGolRuangPegawai] = useState("");
  const [jabatanPegawai, setJabatanPegawai] = useState("");
  const [unitKerjaPegawai, setUnitKerjaPegawai] = useState("");
  const [namaPejabat, setNamaPejabat] = useState("");
  const [nipPejabat, setNipPejabat] = useState("");
  const [pngktAndGolRuangPejabat, setPngktAndGolRuangPejabat] = useState("");
  const [jabatanPejabat, setJabatanPejabat] = useState("");
  const [unitKerjaPejabat, setUnitKerjaPejabat] = useState("");
  const [intervensiByIdIdentitas, setIntervensiByIdIdentitas] = useState("");
  const [rhkByIdIdentitas, setRhkByIdIdentitas] = useState("");
  const [prilakuKerjaByIdIdentitas, setPrilakuKerjaByIdIdentitas] =
    useState("");
  const { id } = useParams();

  useEffect(() => {
    getIdentitasById();
    getIntervensiByIdIdentitas();
    getRhkByIdIdentitas();
    getPrilakuKerjaByIdIdentitas();
  });

  const getIdentitasById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/identitas/${id}`
      );
      const {
        idIdentitas,
        namaPegawai,
        nipPegawai,
        pngktAndGolRuangPegawai,
        jabatanPegawai,
        unitKerjaPegawai,
        namaPejabat,
        nipPejabat,
        pngktAndGolRuangPejabat,
        jabatanPejabat,
        unitKerjaPejabat,
      } = response.data;

      setIdIdentitas(idIdentitas);
      setNamaPegawai(namaPegawai);
      setNipPegawai(nipPegawai);
      setPngktAndGolRuangPegawai(pngktAndGolRuangPegawai);
      setJabatanPegawai(jabatanPegawai);
      setUnitKerjaPegawai(unitKerjaPegawai);
      setNamaPejabat(namaPejabat);
      setNipPejabat(nipPejabat);
      setPngktAndGolRuangPejabat(pngktAndGolRuangPejabat);
      setJabatanPejabat(jabatanPejabat);
      setUnitKerjaPejabat(unitKerjaPejabat);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getIntervensiByIdIdentitas = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/intervensi?idIdentitas=${id}`
      );
      setIntervensiByIdIdentitas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRhkByIdIdentitas = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/rhk/identitas/${id}`
      );
      setRhkByIdIdentitas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getPrilakuKerjaByIdIdentitas = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/prilaku-kerja?idIdentitas=${id}`
      );
      setPrilakuKerjaByIdIdentitas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="limiter background-identitas">
      <span className="ukuran-title p-b-20 p-t-20">Tabel Identitas</span>
      <div className="container-table">
        <table className="table-kedua table colors table-bordered">
          <thead>
            <tr>
              <th>Nama Pegawai</th>
              <th>NIP</th>
              <th>Pangkat/Golongan Ruang</th>
              <th>Jabatan</th>
              <th>Unit Kerja</th>
              <th>Nama Pejabat</th>
              <th>NIP</th>
              <th>Pangkat/Golongan Ruang</th>
              <th>Jabatan</th>
              <th>Unit Kerja</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{namaPegawai}</td>
              <td>{nipPegawai}</td>
              <td>{pngktAndGolRuangPegawai}</td>
              <td>{jabatanPegawai}</td>
              <td>{unitKerjaPegawai}</td>
              <td>{namaPejabat}</td>
              <td>{nipPejabat}</td>
              <td>{pngktAndGolRuangPejabat}</td>
              <td>{jabatanPejabat}</td>
              <td>{unitKerjaPejabat}</td>
              <td>
                <Link
                  to={`/edit/identitas/${id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <span className="ukuran-title p-b-20 p-t-20">Tabel RHK Intervensi</span>

      <div className="container-table">
        {/* <h3>Tabel RHK Intervensi</h3> */}
        <table className="table-kedua table colors table-bordered">
          <thead>
            <tr>
              <th>Intervensi RHK</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {intervensiByIdIdentitas.length === 0 ? (
              <tr>
                <td colSpan="10">Tidak terdapat data yang tersimpan</td>
              </tr>
            ) : (
              intervensiByIdIdentitas.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.rhkIntervensi}</td>
                  <td>
                    <Link
                      to={`/edit/intervensi/${data.idIntervensi}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
                
              ))
            )}
          </tbody>
        </table>
      </div>
      <span className="ukuran-title p-b-20 p-t-20">Tabel RHK</span>
      <div className="container-table">
        {/* <h3>Tabel RHK</h3> */}
        <table className="table-kedua table colors table-bordered">
          <thead>
            <tr>
              <th>RHK</th>
              <th>Kuantitas</th>
              <th>Kualitas</th>
              <th>Waktu</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rhkByIdIdentitas.length === 0 ? (
              <tr>
                <td colSpan="10">Tidak terdapat data yang tersimpan</td>
              </tr>
            ) : (
              rhkByIdIdentitas.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.rhk}</td>
                  <td>{data.kuantitas}</td>
                  <td>{data.kualitas}</td>
                  <td>{data.waktu}</td>
                  <td>
                    <Link
                      to={`/edit/rhk/${data.idRhk}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <span className="ukuran-title p-b-20 p-t-20">Tabel Prilaku Kerja</span>
      <div className="container-table">
        {/* <h3>Tabel Prilaku Kerja</h3> */}
        <table className="table-kedua table colors table-bordered mb-5">
          <thead>
            <tr>
              <th>Berorientasi</th>
              <th>Akuntabel</th>
              <th>Kompeten</th>
              <th>Harmonis</th>
              <th>Loyal</th>
              <th>Adaptif</th>
              <th>Kolaboratif</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {prilakuKerjaByIdIdentitas.length === 0 ? (
              <tr>
                <td colSpan="10">Tidak terdapat data yang tersimpan</td>
              </tr>
            ) : (
              prilakuKerjaByIdIdentitas.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.berorientasiPelayanan}</td>
                  <td>{data.akuntabel}</td>
                  <td>{data.kompeten}</td>
                  <td>{data.harmonis}</td>
                  <td>{data.loyal}</td>
                  <td>{data.adaptif}</td>
                  <td>{data.kolaboratif}</td>
                  <td>
                    <Link
                      to={`/edit/prilaku-kerja/${data.idPrilakuKerja}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditPage;
