import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "../resources/css/util.css";
import "../resources/css/main.css";

const FormIdentitas = () => {

  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title p-b-53">SKP</span>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Nama Pegawai Yang Dinilai</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">NIP</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Pangkat/Gol. Ruang</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Jabatan</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Unit Kerja</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
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
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">NIP</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Pangkat/Gol. Ruang</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Jabatan</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
              <span className="txt1">Unit Kerja</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input className="input100" type="text" name="username" />
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
              <Link className="login100-form-btn" to="/form-rhk-intervensi">Next</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormIdentitas;
