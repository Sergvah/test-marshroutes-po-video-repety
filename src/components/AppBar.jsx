import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: 'dashboard', text: 'Dashboard' },
  { href: 'sales', text: 'Sales' },
  { href: 'reports', text: 'Reports' },
  { href: 'feedback', text: 'Feedback' },
  { href: 'customers', text: 'Customers' },
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

const AppBar = () => {
  return (
    <div>
      <div>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </div>
    </div>
  );
};
export default AppBar;

//  as="header" p={4} height="100vh" borderRight="1px solid black"
//  as="nav" display={'flex'} flexDirection="column"
