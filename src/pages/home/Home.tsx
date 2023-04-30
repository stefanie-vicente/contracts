import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <div>
    <h1>The Contract Automation Plataform</h1>
    <div className="links">
      <Link to="/contracts">Contracts</Link>
      <Link to="/customers">Customers</Link>
    </div>
  </div>
);

export default Home;
