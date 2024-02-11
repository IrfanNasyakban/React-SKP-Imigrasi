import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const FormRHK = () => {
  const [idIntervensi, setidIntervensi] = useState();
  const [rhk, setRhk] = useState();
  const [kuantitas, setKuantitas] = useState();
  const [kualitas, setKualitas] = useState();
  const [waktu, setWaktu] = useState();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleYes = () => {
    window.location.reload(); // Refresh the page
  };

  const handleNo = () => {
    navigate("/"); // Refresh the page
  };

  useEffect(() => {
    getIntervensiById();
  });

  const getIntervensiById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/intervensi/${id}`
      );
      console.log(response.data.idIntervensi);
      setidIntervensi(response.data.idIntervensi);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const saveRhk = async (e) => {
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
      await axios.post("http://localhost:5000/rhk", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={saveRhk}
          >
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
              <input
                className="input100"
                type="text"
                id="rhk"
                name="rhk"
                value={rhk}
                onChange={(e) => setRhk(e.target.value)}
                required
              />
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
                onClick={handleShow}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tersimpan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah anda ingin menambahkan Rencana Hasil Kerja lagi?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleYes}>
            Iya
          </Button>
          <Button variant="primary" onClick={handleNo}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default FormRHK;
