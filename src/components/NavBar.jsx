import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#eee' }}>
      <a className="navbar-brand fw-bold" href="#" style={{ color: '#1a73e8', fontSize: 30 }}>
        La Atajada
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" style={{ fontSize: 16 }} href="#">Remeras</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ fontSize: 16 }} href="#">Zapatillas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ fontSize: 16 }} href="#">Accesorios</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
