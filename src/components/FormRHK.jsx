/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const FormRHK = () => {
  const [rhkData, setRhkData] = useState([]);
  const [idIntervensi, setidIntervensi] = useState();
  const [rhk, setRhk] = useState();
  const [kuantitas, setKuantitas] = useState();
  const [kualitas, setKualitas] = useState();
  const [waktu, setWaktu] = useState();
  const [rhkIntervensi, setRhkIntervensi] = useState();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
    setShowSaveModal(false);
  };

  const handleNextButtonClick = () => {
    if (
      rhkData.filter((item) => item.idIntervensi === idIntervensi).length >= 3
    ) {
      setShowModal(true);
    } else {
      // Lanjutkan dengan proses selanjutnya
      setShowSaveModal(true);
    }
  };

  useEffect(() => {
    getIntervensiById();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-imigrasi.sucofindo-arsip.my.id/rhk"
        );
        const data = await response.json();
        setRhkData(data); // Set data RHK ke dalam state rhkData
      } catch (error) {
        console.error("Error fetching RHK data: ", error);
      }
    };
    fetchData();
  }, []);

  const getIntervensiById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/intervensi/${id}`
      );
      console.log(response.data.idIntervensi);
      setidIntervensi(response.data.idIntervensi);
      setRhkIntervensi(response.data.rhkIntervensi);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const saveRhkYes = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idIntervensi,
      rhk,
      kuantitas,
      kualitas,
      waktu,
    });
    const formData = new FormData();
    formData.append("idIntervensi", idIntervensi);
    formData.append("rhk", rhk);
    formData.append("kuantitas", kuantitas);
    formData.append("kualitas", kualitas);
    formData.append("waktu", waktu);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post(
        "https://api-imigrasi.sucofindo-arsip.my.id/rhk",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const saveRhkNo = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idIntervensi,
      rhk,
      kuantitas,
      kualitas,
      waktu,
    });
    const formData = new FormData();
    formData.append("idIntervensi", idIntervensi);
    formData.append("rhk", rhk);
    formData.append("kuantitas", kuantitas);
    formData.append("kualitas", kualitas);
    formData.append("waktu", waktu);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await axios.post(
        "https://api-imigrasi.sucofindo-arsip.my.id/rhk",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const newId = response.data.idIdentitas;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-prilaku-kerja/${newId}`);
      } else {
        console.log("ID Intervensi tidak valid.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const moveToPrilakuKerja = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/intervensi/${id}`
      );
      console.log(response.data.idIdentitas);
      const newId = response.data.idIdentitas;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-prilaku-kerja/${newId}`);
      } else {
        console.log("ID Intervensi tidak valid.");
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
          <form className="login100-form validate-form flex-sb flex-w">
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
                {rhkIntervensi ===
                "Melakukan Pemberian Dokumen Perjalanan Republik Indonesia (DPRI) kepada Pemohon yang telah lengkap sesuai Prosedur dan Peraturan yang berlaku" ? (
                  <>
                    <option value="Menyusun laporan berkaitan dengan pengambilan foto wajah pemohon Dokumen Perjalanan RI">
                      Menyusun laporan berkaitan dengan pengambilan foto wajah
                      pemohon Dokumen Perjalanan RI
                    </option>
                    <option value="Menyusun laporan berkaitan terlaksananya pemindaian sidik jari">
                      Menyusun laporan berkaitan terlaksananya pemindaian sidik
                      jari
                    </option>
                    <option value="Menyusun laporan hasil wawancara pemohon Dokumen Perjalanan RI">
                      Menyusun laporan hasil wawancara pemohon Dokumen
                      Perjalanan RI
                    </option>
                    <option value="Melakukan validasi biodata pemohon Dokumen Perjalanan Republik Indonesia">
                      Melakukan validasi biodata pemohon Dokumen Perjalanan
                      Republik Indonesia
                    </option>
                  </>
                ) : rhkIntervensi ===
                  "melaksanakan pengelolaan administrasi" ? (
                  <>
                    <option
                      value="Mengelola Sistem Informasi Surat Masuk dan
Surat Keluar"
                    >
                      Mengelola Sistem Informasi Surat Masuk dan Surat Keluar
                    </option>
                    <option value="123">123</option>
                  </>
                ) : rhkIntervensi === "Pengelolaan Informasi Keimigrasian" ? (
                  <>
                    <option value="Menyiapkan dan Menyusun Bahan Penyebaran dan Pemanfaatan Informasi Keimigrasian">
                      Menyiapkan dan Menyusun Bahan Penyebaran dan Pemanfaatan
                      Informasi Keimigrasian
                    </option>
                    <option value="Melakukan pemilahan data WNI dan WNA">
                      Melakukan pemilahan data WNI dan WNA
                    </option>
                    <option value="Melakukan pemeriksaan koneksi jaringan komunikasi keimigrasian">
                      Melakukan pemeriksaan koneksi jaringan komunikasi
                      keimigrasian
                    </option>
                  </>
                ) : rhkIntervensi ===
                  "Mengevaluasi Tata Persuratan pada urusan umum" ? (
                  <>
                    <option value="Melakukan agenda surat masuk dan surat keluar">
                      Melakukan agenda surat masuk dan surat keluar
                    </option>
                  </>
                ) : rhkIntervensi ===
                  "Mengevaluasi laporan bulanan terkait sarana dan prasarana kantor" ? (
                  <>
                    <option value="Membantu menyusun Laporan bulanan terkait Sarana dan Prasana Kantor">
                      Membantu menyusun Laporan bulanan terkait Sarana dan
                      Prasana Kantor
                    </option>
                    <option value="Mengawasi ketersedian sarana dan prasarana serta mengontrol kebersihan Prasaran Kantor">
                      Mengawasi ketersedian sarana dan prasarana serta
                      mengontrol kebersihan Prasaran Kantor
                    </option>
                  </>
                ) : rhkIntervensi ===
                  "Mengevaluasi ketersediaan barang persediaan" ? (
                  <>
                    <option value="Membantu Mencatat ketersedian Barang Persediaan dan mendistribusikan ke seksi lain sesuai kebutuhan">
                    Membantu Mencatat ketersedian Barang Persediaan dan mendistribusikan ke seksi lain sesuai kebutuhan
                    </option>
                  </>
                ) : null}
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
              <Button
                className="login100-form-btn"
                variant="primary"
                onClick={handleNextButtonClick}
              >
                Next
              </Button>
              <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title className="text-danger">Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Tidak Dapat menambahkan data lebih dari 4
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={moveToPrilakuKerja}>
                    Add Prilaku Kerja
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showSaveModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Tersimpan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Apakah anda ingin menambahkan Rencana Hasil Kerja lagi?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={saveRhkYes}>
                    Iya
                  </Button>
                  <Button variant="primary" onClick={saveRhkNo}>
                    Tidak
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRHK;
