import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditRHKIntervensi = () => {
  const [idIdentitas, setIdIdentitas] = useState();
  const [rhkIntervensi, setRhkIntervensi] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRhkIntervensiById();
  }, []);

  const getRhkIntervensiById = async () => {
    const response = await axios.get(
      `https://api-imigrasi.sucofindo-arsip.my.id/intervensi/${id}`
    );
    setIdIdentitas(response.data.idIdentitas);
    setRhkIntervensi(response.data.rhkIntervensi);
  };

  const updateRhkIntervensi = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("idIdentitas", idIdentitas);
    formData.append("rhkIntervensi", rhkIntervensi);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    try {
      await axios.patch(
        `https://api-imigrasi.sucofindo-arsip.my.id/intervensi/${id}`,
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
    <div className="limiter background">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={updateRhkIntervensi}
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
              <select
                className="input100"
                id="rhkIntervensi"
                value={rhkIntervensi}
                onChange={(e) => setRhkIntervensi(e.target.value)}
              >
                <option value={null}>-- Pilih --</option>
                <option value="Pelaksanaan Pemilihan Pemberian Kredit Imigrasi">
                  Pelaksanaan Pemilihan Pemberian Kredit Imigrasi
                </option>
              </select>
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditRHKIntervensi;
