import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "../resources/css/util.css";
import "../resources/css/main.css";

const FormRHKStructure = () => {
  const [idIdentitasStructure, setIdIdentitasStructure] = useState();
  const [rhk, setRhk] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getIdentitasById();
  });

  const getIdentitasById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/identitas-structure/${id}`
      );
      setIdIdentitasStructure(response.data.idIdentitasStructure);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const saveRhkStructure = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idIdentitasStructure,
      rhk,
    });
    const formData = new FormData();
    formData.append("idIdentitasStructure", idIdentitasStructure);
    formData.append("rhk", rhk);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await axios.post(
        "https://api-imigrasi.sucofindo-arsip.my.id/rhk-structure",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newId = response.data.idRhkStructure;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-indikator-kinerja-structure/${newId}`);
      } else {
        console.log("ID Rhk Structure tidak valid.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="limiter background">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={saveRhkStructure}
          >
            <span className="login100-form-title p-b-53">SKP Struktur</span>

            <div className="p-t-31 p-b-9">
              <span className="txt1">No ID</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                name="idIdentitasStructure"
                readOnly
                value={idIdentitasStructure || ""}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Rencana Hasil Kerja
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <select
                className="input100"
                id="rhk"
                value={rhk}
                onChange={(e) => setRhk(e.target.value)}
              >
                <option value={null}>-- Pilih --</option>
                <option value="Melakukan Pengelolaan Sumber Daya Manusia dan Tata Usaha">
                  Melakukan Pengelolaan Sumber Daya Manusia dan Tata Usaha
                </option>
                <option value="Memonitoring penyusunan kinerja urusan Umum">
                Memonitoring penyusunan kinerja urusan Umum
                </option>
                <option value="Memonitoring surat masuk/keluar di bagian Umum">
                Memonitoring surat masuk/keluar di bagian Umum
                </option>
                <option value="Memantau pengawasan terhadap kebersihan dan keamanan kantor">
                Memantau pengawasan terhadap kebersihan dan keamanan kantor
                </option>
                <option value="Memonitoring laporan bulanan BMN">
                Memonitoring laporan bulanan BMN
                </option>
                <option value="Pengawasan terhadap penilaian pegawai">
                Pengawasan terhadap penilaian pegawai
                </option>
              </select>
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRHKStructure;
