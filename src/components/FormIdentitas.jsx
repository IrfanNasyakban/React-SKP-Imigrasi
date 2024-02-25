import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "../resources/css/util.css";
import "../resources/css/main.css";
import "../styles/formIdentitas.css"

const FormIdentitas = () => {
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
  const navigate = useNavigate();

  const saveIdentitas = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
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
    });
    const formData = new FormData();
    formData.append("namaPegawai", namaPegawai);
    formData.append("nipPegawai", nipPegawai);
    formData.append("pngktAndGolRuangPegawai", pngktAndGolRuangPegawai);
    formData.append("jabatanPegawai", jabatanPegawai);
    formData.append("unitKerjaPegawai", unitKerjaPegawai);
    formData.append("namaPejabat", namaPejabat);
    formData.append("nipPejabat", nipPejabat);
    formData.append("pngktAndGolRuangPejabat", pngktAndGolRuangPejabat);
    formData.append("jabatanPejabat", jabatanPejabat);
    formData.append("unitKerjaPejabat", unitKerjaPejabat);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await axios.post("http://localhost:5000/identitas", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.idIdentitas);
      const newId = response.data.idIdentitas;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-rhk-intervensi/${newId}`);
      } else {
        console.log("ID Identitas tidak valid.");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="limiter background-identitas">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={saveIdentitas}
          >
            <span className="login100-form-title p-b-53">SKP</span>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Nama Pegawai Yang Dinilai</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="namaPegawai"
                name="namaPegawai"
                value={namaPegawai}
                onChange={(e) => setNamaPegawai(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">NIP</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="nipPegawai"
                name="nipPegawai"
                value={nipPegawai}
                onChange={(e) => setNipPegawai(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Pangkat/Gol. Ruang</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="pngktAndGolRuangPegawai"
                name="pngktAndGolRuangPegawai"
                value={pngktAndGolRuangPegawai}
                onChange={(e) => setPngktAndGolRuangPegawai(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Jabatan</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="jabatanPegawai"
                name="jabatanPegawai"
                value={jabatanPegawai}
                onChange={(e) => setJabatanPegawai(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Unit Kerja</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="unitKerjaPegawai"
                name="unitKerjaPegawai"
                value={unitKerjaPegawai}
                onChange={(e) => setUnitKerjaPegawai(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <hr className="border-bottom" />

            <div className="p-t-31 p-b-9">
              <span className="txt1">Nama Pejabat Penilai Kinerja</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="namaPejabat"
                name="namaPejabat"
                value={namaPejabat}
                onChange={(e) => setNamaPejabat(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">NIP</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="nipPejabat"
                name="nipPejabat"
                value={nipPejabat}
                onChange={(e) => setNipPejabat(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Pangkat/Gol. Ruang</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="pngktAndGolRuangPejabat"
                name="pngktAndGolRuangPejabat"
                value={pngktAndGolRuangPejabat}
                onChange={(e) => setPngktAndGolRuangPejabat(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Jabatan</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="jabatanPejabat"
                name="jabatanPejabat"
                value={jabatanPejabat}
                onChange={(e) => setJabatanPejabat(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Unit Kerja</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="unitKerjaPejabat"
                name="unitKerjaPejabat"
                value={unitKerjaPejabat}
                onChange={(e) => setUnitKerjaPejabat(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            {/* <div className="p-t-13 p-b-9">
            <span className="txt1">
              NIP
            </span>

            <a href="#" className="txt2 bo1 m-l-5">
              Forgot?
            </a>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input className="input100" type="password" name="pass" />
            <span className="focus-input100"></span>
          </div> */}

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormIdentitas;
