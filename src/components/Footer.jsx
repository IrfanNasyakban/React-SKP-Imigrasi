import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary section-padding">
      {/* <!-- Copyright --> */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2024 by Kantor Imigrasi Kelas II TPI Lhokseumawe. All rights reserved.
      </div>
      {/* <!-- Copyright --> */}

      {/* <!-- Right --> */}
      <div>
        <a href="#!" className="text-white me-4">
          <FaFacebookF />
        </a>
        <a href="#!" className="text-white me-4">
          <FaTwitter />
        </a>
        <a href="#!" className="text-white me-4">
          <FaGoogle />
        </a>
        <a href="#!" className="text-white">
          <FaLinkedinIn />
        </a>
      </div>
      {/* <!-- Right --> */}
    </div>
  );
};

export default Footer;
