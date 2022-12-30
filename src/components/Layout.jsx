import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';
// import Box from './Box';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
export default Layout;

//  display="grid" gridTemplateColumns="200px 1fr"
