import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FormPrilakuKerja = () => {
  const [idIdentitas, setIdIdentitas] = useState();
  const [berorientasiPelayanan, setBerorientasiPelayanan] = useState("-");
  const [akuntabel, setAkuntabel] = useState("-");
  const [kompeten, setKompeten] = useState("-");
  const [harmonis, setHarmonis] = useState("-");
  const [loyal, setLoyal] = useState("-");
  const [adaptif, setAdaptif] = useState("-");
  const [kolaboratif, setKolaboratif] = useState("-");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPrilakuKerjaById();
    getIdentitasById();
  });

  const getIdentitasById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/identitas/${id}`
      );
      console.log(response.data.idIdentitas);
      setIdIdentitas(response.data.idIdentitas);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const getPrilakuKerjaById = async () => {
    try {
      const response = await axios.get(
        `https://api-imigrasi.sucofindo-arsip.my.id/prilaku-kerja/${id}`
      );
      setIdIdentitas(response.data.idIdentitas);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here
    }
  };

  const savePrilakuKerja = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idIdentitas,
      berorientasiPelayanan,
      akuntabel,
      kompeten,
      harmonis,
      loyal,
      adaptif,
      kolaboratif,
    });
    const formData = new FormData();
    formData.append("idIdentitas", idIdentitas);
    formData.append("berorientasiPelayanan", berorientasiPelayanan);
    formData.append("akuntabel", akuntabel);
    formData.append("kompeten", kompeten);
    formData.append("harmonis", harmonis);
    formData.append("loyal", loyal);
    formData.append("adaptif", adaptif);
    formData.append("kolaboratif", kolaboratif);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post(
        "https://api-imigrasi.sucofindo-arsip.my.id/prilaku-kerja",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate(`/list/${idIdentitas}`);
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
            onSubmit={savePrilakuKerja}
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
              <span className="txt1">Berorientasi Pelayanan,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="berorientasiPelayanan"
                name="berorientasiPelayanan"
                value={berorientasiPelayanan}
                onChange={(e) => setBerorientasiPelayanan(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Akuntabel,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="akuntabel"
                name="akuntabel"
                value={akuntabel}
                onChange={(e) => setAkuntabel(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Kompeten,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="kompeten"
                name="kompeten"
                value={kompeten}
                onChange={(e) => setKompeten(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Harmonis,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="harmonis"
                name="harmonis"
                value={harmonis}
                onChange={(e) => setHarmonis(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Loyal,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="loyal"
                name="loyal"
                value={loyal}
                onChange={(e) => setLoyal(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Adaptasi,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="adaptif"
                name="adaptif"
                value={adaptif}
                onChange={(e) => setAdaptif(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Kolaboratif,</span>{" "}
              <p>Ekspektasi Khusus Pimpinan:</p>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                id="kolaboratif"
                name="kolaboratif"
                value={kolaboratif}
                onChange={(e) => setKolaboratif(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn" variant="primary">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPrilakuKerja;
