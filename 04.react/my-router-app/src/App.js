import './App.css';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Nav from './components/Nav';

// an1. function App({ children }) {
function App() {
  return (
    <div>
      <Nav></Nav>
      <hr />
      {/* an1. <div>{children} </div> */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
