import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditRHK = () => {
    const [idIntervensi, setIdIntervensi] = useState();
  const [rhk, setRhk] = useState();
  const [kuantitas, setKuantitas] = useState();
  const [kualitas, setKualitas] = useState();
  const [waktu, setWaktu] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRhkIntervensiById();
  }, []);

  const getRhkIntervensiById = async () => {
    const response = await axios.get(
      `https://api-imigrasi.sucofindo-arsip.my.id/rhk/${id}`
    );
    setIdIntervensi(response.data.idIntervensi);
    setRhk(response.data.rhk);
    setKuantitas(response.data.kuantitas);
    setKualitas(response.data.kualitas);
    setWaktu(response.data.waktu);
};

const updateRhk = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("idIntervensi", idIntervensi);
    formData.append("rhk", rhk);
    formData.append("kuantitas", kuantitas);
    formData.append("kualitas", kualitas);
    formData.append("waktu", waktu);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    try {
      await axios.patch(
        `https://api-imigrasi.sucofindo-arsip.my.id/rhk/${id}`,
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
          <form className="login100-form validate-form flex-sb flex-w" onSubmit={updateRhk}>
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
                name="idIntervensi"
                readOnly
                value={idIntervensi || ""}
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
                id="rhk"
                value={rhk}
                onChange={(e) => setRhk(e.target.value)}
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
                id="kuantitas"
                name="kuantitas"
                value={kuantitas}
                onChange={(e) => setKuantitas(e.target.value)}
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
                id="kualitas"
                name="kualitas"
                value={kualitas}
                onChange={(e) => setKualitas(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Ketepatan Waktu Penyelesaian Kegiatan
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="waktu"
                name="waktu"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
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

export default EditRHK
