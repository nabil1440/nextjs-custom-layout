import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const SidebarLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default SidebarLayout;
