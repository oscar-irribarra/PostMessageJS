import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/counter'>Counter</NavLink>
          </li>
          <li>
            <NavLink to='/todo'>Todo</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
