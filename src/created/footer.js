function Footer() {
  return (
    <>
      <footer className="py-3 my-4"style={{ backgroundColor: 'black' }} >
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About us</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">vehicles</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Services</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Contact us</a></li>
        </ul>
        <div data-testid="footer-content">
          <p className="text-center text-white">© 2024 ABC Automobiles, Inc</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
