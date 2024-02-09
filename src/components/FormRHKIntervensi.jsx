import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "../resources/css/util.css";
import "../resources/css/main.css";

const FormRHKIntervensi = () => {
  const [idIdentitas, setIdIdentitas] = useState();
  const [rhkIntervensi, setRhkIntervensi] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getIdentitasById();
  });

  const getIdentitasById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/identitas/${id}`);
      setIdIdentitas(response.data.idIdentitas);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const saveRhkIntervensi = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idIdentitas,
      rhkIntervensi,
    });
    const formData = new FormData();
    formData.append("idIdentitas", idIdentitas);
    formData.append("rhkIntervensi", rhkIntervensi);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/intervensi",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newId = response.data.idIntervensi;
      console.log("New ID:", newId);
      if (newId) {
        navigate(`/form-rhk/${newId}`);
      } else {
        console.log("ID Intervensi tidak valid.");
      }
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
          <form className="login100-form validate-form flex-sb flex-w" onSubmit={saveRhkIntervensi}>
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
                name="idIdentitas"
                readOnly
                value={idIdentitas || ""}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Rencana Hasil Kerja Atasan Yang Diintervensi
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="rhkIntervensi"
                name="rhkIntervensi"
                value={rhkIntervensi}
                onChange={(e) => setRhkIntervensi(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

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

export default FormRHKIntervensi;
