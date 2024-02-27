/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditIdentitas = () => {
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
  const { id } = useParams();

  useEffect(() => {
    getIdentitasById();
  }, []);

  const getIdentitasById = async () => {
    const response = await axios.get(
      `https://api-imigrasi.sucofindo-arsip.my.id/identitas/${id}`
    );
    setNamaPegawai(response.data.namaPegawai);
    setNipPegawai(response.data.nipPegawai);
    setPngktAndGolRuangPegawai(response.data.pngktAndGolRuangPegawai);
    setJabatanPegawai(response.data.jabatanPegawai);
    setUnitKerjaPegawai(response.data.unitKerjaPegawai);
    setNamaPejabat(response.data.namaPejabat);
    setNipPejabat(response.data.nipPejabat);
    setPngktAndGolRuangPejabat(response.data.pngktAndGolRuangPejabat);
    setJabatanPejabat(response.data.jabatanPejabat);
    setUnitKerjaPejabat(response.data.unitKerjaPejabat);
  };

  const updateIdentitas = async (e) => {
    e.preventDefault();
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

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    try {
      await axios.patch(
        `https://api-imigrasi.sucofindo-arsip.my.id/identitas/${id}`,
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate(-1);
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
            onSubmit={updateIdentitas}
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
              <button className="login100-form-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditIdentitas;
