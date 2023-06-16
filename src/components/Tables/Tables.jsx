const Tables = ({ children,getTableProps }) => {
  return (
    <table className='table ' {...getTableProps()} >
      {children}
    </table>
  );
};
export default Tables