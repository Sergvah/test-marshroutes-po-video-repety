import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
    color: black;
    width: 100px;
  &.active {
    background-color: grey;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
`;

const Sales = () => {
  return (
    <main>
      <header>
        <ul>
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </ul>
      </header>
      <Outlet />
    </main>
  );
};
export default Sales;
