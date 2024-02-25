/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditIndikatorKinerjaStructure = () => {
    const [idRhkStructure, setIdRhkStructure] = useState();
  const [indikatorKinerja, setIndikatorKinerja] = useState();
  const [target, setTarget] = useState();
  const [perspektif, setPerspektif] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRhkStructureById();
  }, []);

  const getRhkStructureById = async () => {
    const response = await axios.get(
      `http://localhost:5000/indikator-kinerja/${id}`
    );
    setIdRhkStructure(response.data.idRhkStructure);
    setIndikatorKinerja(response.data.indikatorKinerja);
    setTarget(response.data.target);
    setPerspektif(response.data.perspektif);
    console.log(indikatorKinerja);
};

const updateIndikatorKinerja = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("idRhkStructure", idRhkStructure);
    formData.append("indikatorKinerja", indikatorKinerja);
    formData.append("target", target);
    formData.append("perspektif", perspektif);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    try {
      await axios.patch(
        `http://localhost:5000/indikator-kinerja/${id}`,
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
          <form className="login100-form validate-form flex-sb flex-w" onSubmit={updateIndikatorKinerja}>
            <span className="login100-form-title p-b-53">SKP</span>

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
                name="idRhkStructure"
                readOnly
                value={idRhkStructure || ""}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Rencana Hasil Kerja</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <select
                className="input100"
                id="indikatorKinerja"
                value={indikatorKinerja}
                onChange={(e) => setIndikatorKinerja(e.target.value)}
              >
                <option value={null}>-- Pilih --</option>
                <option value="Melakukan Peneraan. Perpanjangan Izin Tinggal dan Alih Status Keimigrasian Warga Negara Asing">
                  Melakukan Peneraan. Perpanjangan Izin Tinggal dan Alih Status
                  Keimigrasian Warga Negara Asing
                </option>
                <option value="Melakukan Pemeriksaan Keimigrasian terhadap Awak Alat Angkut di TPI">
                  Melakukan Pemeriksaan Keimigrasian terhadap Awak Alat Angkut
                  di TPI
                </option>
                <option value="Melakukan Pengambilan Biometrik dan Wawancara Pemohon DPRI">
                  Melakukan Pengambilan Biometrik dan Wawancara Pemohon DPRI
                </option>
                <option value="Melakukan Pemetaan terkait Keberadaan dan Kegiatan Warga Negara Asing di Wilayah Kerja Kanim">
                  Melakukan Pemetaan terkait Keberadaan dan Kegiatan Warga
                  Negara Asing di Wilayah Kerja Kanim
                </option>
              </select>
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Jumlah Pelaksanaan Kegiatan Dalam 1 Tahun
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="target"
                name="target"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Tingkat Kesesuaian Dengan Pelaksanaan Kegiatan
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="perspektif"
                name="perspektif"
                value={perspektif}
                onChange={(e) => setPerspektif(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button
                className="login100-form-btn"
                variant="primary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditIndikatorKinerjaStructure
