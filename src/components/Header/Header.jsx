import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav style={{ marginTop: "15px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Components</Link>
        <Link to="/practice2" style={{ marginRight: "20px" }}>useState</Link>
        <Link to="/catalog" style={{ marginRight: "20px" }}>CRUD</Link>
      </nav>
    </header>
  );
}

export default Header;