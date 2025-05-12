
import logoWhite from '../../assets/logo_white.png';

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white">
      <footer className="footer sm:footer-horizontal   p-10 max-w-7xl   mx-auto pt-10 md:pt-20">
        <aside>
          <img src={logoWhite} alt="logo" className="w-full h-24 mb-4 " />
          <p>
            Track 2 Hired
            <br />
            <br />
            Your Job Search Command Center
          </p>
          <p className="text-sm">© 2025 Track2Hired. All rights reserved.</p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
