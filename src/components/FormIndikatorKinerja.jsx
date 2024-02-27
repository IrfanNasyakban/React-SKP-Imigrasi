/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const FormRHK = () => {
  const [indikatorKinerjaData, setIndikatorKinerjaData] = useState([]);
  const [idRhkStructure, setIdRhkStructure] = useState();
  const [indikatorKinerja, setIndikatorKinerja] = useState();
  const [target, setTarget] = useState();
  const [perspektif, setPerspektif] = useState();
  const [rhk, setRhk] = useState();
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
      indikatorKinerjaData.filter(
        (item) => item.idRhkStructure === idRhkStructure
      ).length >= 3
    ) {
      setShowModal(true);
    } else {
      // Lanjutkan dengan proses selanjutnya
      setShowSaveModal(true);
    }
  };

  useEffect(() => {
    getRhkStructureById();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-imigrasi.sucofindo-arsip.my.id/indikator-kinerja"
        );
        const data = await response.json();
        setIndikatorKinerjaData(data); // Set data RHK ke dalam state rhkData
      } catch (error) {
        console.error("Error fetching Indikator Kinerja data: ", error);
      }
    };
    fetchData();
  }, []);

  const getRhkStructureById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/rhk-structure/${id}`
      );
      console.log(response.data.idRhkStructure);
      setIdRhkStructure(response.data.idRhkStructure);
      setRhk(response.data.rhk);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const saveIndikatorKinerjaYes = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idRhkStructure,
      indikatorKinerja,
      target,
      perspektif,
    });
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
      await axios.post(
        "https://api-imigrasi.sucofindo-arsip.my.id/indikator-kinerja",
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

  const saveIndikatorKinerjaNo = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idRhkStructure,
      indikatorKinerja,
      target,
      perspektif,
    });
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
      const response = await axios.post(
        "https://api-imigrasi.sucofindo-arsip.my.id/indikator-kinerja",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newId = response.data.idIdentitasStructure;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-prilaku-kerja-structure/${newId}`);
      } else {
        console.log("ID Intervensi tidak valid.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const moveToPrilakuKerjaStructure = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/rhk-structure/${id}`
      );
      console.log(response.data.idIdentitasStructure);
      const newId = response.data.idIdentitasStructure;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-prilaku-kerja-structure/${newId}`);
      } else {
        console.log("ID Rhk Structure tidak valid.");
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
                name="idRhkStructure"
                readOnly
                value={idRhkStructure || ""}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Indikator Kinerja</span>
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
                {rhk ===
                "Melakukan Pengelolaan Sumber Daya Manusia dan Tata Usaha" ? (
                  <>
                    <option
                      value="melaksanakan/menyiapkan bahan usulan kenaikan
pangkat, kenaikan gaji berkala, penetapan status
kepegawaian, pembuatan kartu Pegawai, kartu"
                    >
                      melaksanakan/menyiapkan bahan usulan kenaikan pangkat,
                      kenaikan gaji berkala, penetapan status kepegawaian,
                      pembuatan kartu Pegawai, kartu
                    </option>
                    <option
                      value="Mengelola Aplikasi Sistem Informasi
Kepegawaian (SIMPEG)"
                    >
                      Mengelola Aplikasi Sistem Informasi Kepegawaian (SIMPEG)
                    </option>
                  </>
                ) : rhk === "melaksanakan pengelolaan administrasi" ? (
                  <>
                    <option
                      value="Mengelola Sistem Informasi Surat Masuk dan
Surat Keluar"
                    >
                      Mengelola Sistem Informasi Surat Masuk dan Surat Keluar
                    </option>
                  </>
                ) : rhk === "Memonitoring penyusunan kinerja urusan Umum" ? (
                  <>
                    <option value="Menyusun Rencana/Kelender Kerja Urusan Umum di Lingkungan Kantor Imigrasi Kelas II TPI Lhokseumawe">
                      Menyusun Rencana/Kelender Kerja Urusan Umum di Lingkungan
                      Kantor Imigrasi Kelas II TPI Lhokseumawe
                    </option>
                  </>
                ) : rhk ===
                  "Memantau pengawasan terhadap kebersihan dan keamanan kantor" ? (
                  <>
                    <option value="Mengevaluasi Pengawasan terhadap Kebersihan dan Keamanan Kantor di Lingkungan Kantor Imigrasi Kelas II TPI Lhokseumawe">
                      Mengevaluasi Pengawasan terhadap Kebersihan dan Keamanan
                      Kantor di Lingkungan Kantor Imigrasi Kelas II TPI
                      Lhokseumawe
                    </option>
                  </>
                ) : rhk === "Memonitoring surat masuk/keluar di bagian Umum" ? (
                  <>
                    <option value="Mengevaluasi Tata Persuratan di Lingkungan Kantor Imigrasi Kelas II TPI Lhokseumawe">
                      Mengevaluasi Tata Persuratan di Lingkungan Kantor Imigrasi
                      Kelas II TPI Lhokseumawe
                    </option>
                  </>
                ) : rhk === "Memonitoring laporan bulanan BMN" ? (
                  <>
                    <option value="Mengevaluasi Pengadministrasian/Penertiban terhadap Barang Milik Negara (BMN) dan terhadap Barang Persediaan di Lingkungan Kantor Imigrasi Kelas II TPI Lhokseumawe">
                      Mengevaluasi Pengadministrasian/Penertiban terhadap Barang
                      Milik Negara (BMN) dan terhadap Barang Persediaan di
                      Lingkungan Kantor Imigrasi Kelas II TPI Lhokseumawe
                    </option>
                    <option value="Mengevaluasi Laporan Bulanan, Laporan Simak BMN dan Laporan Barang Persedian di Lingkungan Kantor Imigrasi Kelas II TPI Lhokseumawe">
                      Mengevaluasi Laporan Bulanan, Laporan Simak BMN dan
                      Laporan Barang Persedian di Lingkungan Kantor Imigrasi
                      Kelas II TPI Lhokseumawe
                    </option>
                  </>
                ) : rhk === "Pengawasan terhadap penilaian pegawai" ? (
                  <>
                    <option value="Mengevaluasi Waskat dan Memberikan penilaian Perilaku Score terhadap Kinerja Bawahan di Lingkungan Kantor Imigrasi Kela II TPI Lhokseumawe">
                      Mengevaluasi Tata Persuratan di Lingkungan Kantor Imigrasi
                      Mengevaluasi Waskat dan Memberikan penilaian Perilaku
                      Score terhadap Kinerja Bawahan di Lingkungan Kantor
                      Imigrasi Kela II TPI Lhokseumawe
                    </option>
                  </>
                ) : null}
              </select>
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Target</span>
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
              <span className="txt1">Perspektif</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <select
                className="input100"
                id="perspektif"
                name="perspektif"
                value={perspektif}
                onChange={(e) => setPerspektif(e.target.value)}
                required
              >
                <option value="">Pilih Perspektif</option>
                <option value="Penerima Layanan">Penerima Layanan</option>
                <option value="Proses Bisnis">Proses Bisnis</option>
                <option value="Penguatan Internal">Penguatan Internal</option>
                <option value="Anggaran">Anggaran</option>
                <option value="(Penerima Layanan/ Proses Bisnis/ Penguatan Internal/ Anggaran)">
                  (Penerima Layanan/ Proses Bisnis/ Penguatan Internal/
                  Anggaran)
                </option>
              </select>
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
                  Tidak Dapat menambahkan data lebih dari 3
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    onClick={moveToPrilakuKerjaStructure}
                  >
                    Add Prilaku Kerja
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showSaveModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Tersimpan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Apakah anda ingin menambahkan Indikator Kinerja lagi?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={saveIndikatorKinerjaYes}>
                    Iya
                  </Button>
                  <Button variant="primary" onClick={saveIndikatorKinerjaNo}>
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
