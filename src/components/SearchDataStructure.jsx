import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/searchData.css";

const SearchDataStructure = () => {
  const [searchNama, setSearchNama] = useState("");
  const [idIdentitasStructure, setIdIdentitasStructure] = useState([]);
  const [namaPegawai, setNamaPegawai] = useState([]);
  const [nipPegawai, setNipPegawai] = useState([]);
  const [namaPejabat, setNamaPejabat] = useState([]);
  const [nipPejabat, setNipPejabat] = useState([]);

  //   useEffect(() => {
  //     // Cek apakah terdapat data di session storage saat komponen dimuat
  //     const storedData = sessionStorage.getItem("searchData");
  //     if (storedData) {
  //       const { idIdentitas, namaPegawai, nipPegawai, namaPejabat, nipPejabat } =
  //         JSON.parse(storedData);
  //       setIdIdentitas(idIdentitas);
  //       setNamaPegawai(namaPegawai);
  //       setNipPegawai(nipPegawai);
  //       setNamaPejabat(namaPejabat);
  //       setNipPejabat(nipPejabat);
  //     }
  //   }, []);

  useEffect(() => {
    // Menghapus data dari session storage saat komponen dimuat kembali (halaman direfresh)
    sessionStorage.removeItem("searchData");
  }, []); // Dependensi kosong agar efek ini hanya dijalankan sekali saat komponen dimuat

  const getIdentitasStructureByNama = async () => {
    try {
      if (searchNama.trim() !== "") {
        // Pastikan input nama tidak kosong
        const response = await axios.get(
          `http://localhost:5000/identitas-structure?search_query=${searchNama}`
        );
        if (response.data.length > 0) {
          const data = response.data; // Mengambil semua objek dari array respons
          // Menyimpan data di session storage
          sessionStorage.setItem(
            "searchData",
            JSON.stringify({
              idIdentitasStructure: data.map((item) => item.idIdentitasStructure),
              namaPegawai: data.map((item) => item.namaPegawai),
              nipPegawai: data.map((item) => item.nipPegawai),
              namaPejabat: data.map((item) => item.namaPejabat),
              nipPejabat: data.map((item) => item.nipPejabat),
            })
          );
          // Mengatur state dengan data dari respons
          setIdIdentitasStructure(data.map((item) => item.idIdentitasStructure));
          setNamaPegawai(data.map((item) => item.namaPegawai));
          setNipPegawai(data.map((item) => item.nipPegawai));
          setNamaPejabat(data.map((item) => item.namaPejabat));
          setNipPejabat(data.map((item) => item.nipPejabat));
        } else {
          // Data tidak ditemukan, lakukan sesuatu (misalnya tampilkan pesan)
          console.log("Data not found");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="limiter background">
      <div
        className="container-login100"
      >
        <div className="wrap-login100 p-l-110 p-r-110">
          <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title p-b-40">Mencari Data SKP</span>

            <div className="p-t-21 p-b-9">
              <span className="txt1">Cari Nama Pegawai</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="namaPegawai"
                value={searchNama}
                onChange={(e) => setSearchNama(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button
                className="login100-form-btn"
                onClick={(e) => {
                  e.preventDefault(); // Mencegah form submit
                  getIdentitasStructureByNama(); // Panggil fungsi pencarian
                }}
              >
                Cari
              </button>
            </div>
          </form>
        </div>
      </div>

      {idIdentitasStructure && (
        <div className="container-table">
          <table className="table-kedua table colors table-bordered">
            <thead>
              <tr>
                <th>ID Identitas</th>
                <th>Nama Pegawai</th>
                <th>NIP Pegawai</th>
                <th>Nama Pejabat</th>
                <th>NIP Pejabat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping melalui array dan membuat baris-baris tabel */}
              {idIdentitasStructure.map((id, index) => (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{namaPegawai[index]}</td>
                  <td>{nipPegawai[index]}</td>
                  <td>{namaPejabat[index]}</td>
                  <td>{nipPejabat[index]}</td>
                  <td>
                    <Link
                      to={`/list-structure/${idIdentitasStructure[index]}`}
                      className="btn btn-sm btn-success me-2"
                    >
                      View
                    </Link>
                    <Link className="btn btn-sm btn-primary" to={`/edit/${idIdentitasStructure[index]}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchDataStructure;
