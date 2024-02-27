/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/editPage.css";

const EditPageStructure = () => {
  const [idIdentitasStructure, setIdIdentitasStructure] = useState("");
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
  const [rhkStructureByIdIdentitas, setRhkStructureByIdIdentitas] = useState("");
  const [indikatorKinerjaByIdIdentitas, setIndikatorKinerjaByIdIdentitas] = useState("");
  const [prilakuKerjaStructureByIdIdentitas, setPrilakuKerjaStructureByIdIdentitas] =
    useState("");
  const { id } = useParams();

  useEffect(() => {
    getIdentitasStructureById();
    getRhkStructureByIdIdentitas();
    getIndikatorKinerjaByIdIdentitas();
    getPrilakuKerjaStructureByIdIdentitas();
  }, []);

  const getIdentitasStructureById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/identitas-structure/${id}`
      );
      const {
        idIdentitasStructure,
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

      setIdIdentitasStructure(idIdentitasStructure);
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

  const getRhkStructureByIdIdentitas = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/rhk-structure?idIdentitasStructure=${id}`
      );
      setRhkStructureByIdIdentitas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getIndikatorKinerjaByIdIdentitas = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/indikator-kinerja/identitas-structure/${id}`
      );
      setIndikatorKinerjaByIdIdentitas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getPrilakuKerjaStructureByIdIdentitas = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/prilaku-kerja-structure?idIdentitasStructure=${id}`
      );
      setPrilakuKerjaStructureByIdIdentitas(response.data);
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
                  to={`/edit/identitas-structure/${id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <span className="ukuran-title p-b-20 p-t-20">Tabel RHK</span>

      <div className="container-table">
        {/* <h3>Tabel RHK Intervensi</h3> */}
        <table className="table-kedua table colors table-bordered">
          <thead>
            <tr>
              <th>RHK</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rhkStructureByIdIdentitas.length === 0 ? (
              <tr>
                <td colSpan="10">Tidak terdapat data yang tersimpan</td>
              </tr>
            ) : (
              rhkStructureByIdIdentitas.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.rhk}</td>
                  <td>
                    <Link
                      to={`/edit/rhk-structure/${data.idRhkStructure}`}
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
      <span className="ukuran-title p-b-20 p-t-20">Tabel Indikator Kinerja</span>
      <div className="container-table">
        {/* <h3>Tabel RHK</h3> */}
        <table className="table-kedua table colors table-bordered">
          <thead>
            <tr>
              <th>Indikator Kinerja</th>
              <th>Target</th>
              <th>Perspektif</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {indikatorKinerjaByIdIdentitas.length === 0 ? (
              <tr>
                <td colSpan="10">Tidak terdapat data yang tersimpan</td>
              </tr>
            ) : (
              indikatorKinerjaByIdIdentitas.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.indikatorKinerja}</td>
                  <td>{data.target}</td>
                  <td>{data.perspektif}</td>
                  <td>
                    <Link
                      to={`/edit/indikator-kinerja-structure/${data.idIndikatorKinerja}`}
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
            {prilakuKerjaStructureByIdIdentitas.length === 0 ? (
              <tr>
                <td colSpan="10">Tidak terdapat data yang tersimpan</td>
              </tr>
            ) : (
              prilakuKerjaStructureByIdIdentitas.map((data, index) => (
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
                      to={`/edit/prilaku-kerja-structure/${data.idPrilakuKerjaStructure}`}
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

export default EditPageStructure;
