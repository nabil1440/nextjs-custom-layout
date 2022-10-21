const Sidebar = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className='sidebar'>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
