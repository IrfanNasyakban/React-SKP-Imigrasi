/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditRHKStructure = () => {
  const [idIdentitasStructure, setIdIdentitasStructure] = useState();
  const [rhk, setRhk] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRhkStructureById();
  }, []);

  const getRhkStructureById = async () => {
    const response = await axios.get(
      `https://api-imigrasi.sucofindo-arsip.my.id/rhk-structure/${id}`
    );
    setIdIdentitasStructure(response.data.idIdentitasStructure);
    setRhk(response.data.rhk);
  };

  const updateRhkStructure = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("idIdentitasStructure", idIdentitasStructure);
    formData.append("rhk", rhk);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    try {
      await axios.patch(
        `https://api-imigrasi.sucofindo-arsip.my.id/rhk-structure/${id}`,
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
            onSubmit={updateRhkStructure}
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

export default EditRHKStructure;
