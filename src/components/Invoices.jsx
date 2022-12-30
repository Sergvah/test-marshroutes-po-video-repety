import { useState, useEffect } from 'react';
import { getInvoices } from 'services/FakeApi';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Invoices = () => {
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
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);
  return (
    <div>
      <ul>
        {invoices.map(({ id }) => (
          <NavItem key={id} to={`${id}`}>
            {id}
          </NavItem>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default Invoices;
