import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsCom from "../../component/AdminCompo/userDetails";
import UserContext from "../../context/Admin_page/userFunction/userContext";
import "../../utlis/admin_css/content.css";

const AdminUser = () => {
  const context = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const { getUser, users } = context;
  const [currentPage, setCurrentPage] = useState(1);
  const userPerpage = 10;
  const totalPages = Math.ceil(users.length / userPerpage);

  function sliceTodos() {
    const indexOfLastTodo = currentPage * userPerpage;
    const indexOfFirstTodo = indexOfLastTodo - userPerpage;
    return users.slice(indexOfFirstTodo, indexOfLastTodo);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="action">Client ID</th>
            <th>Client IMAGE</th>
            <th>Client Name</th>
            <th>Client Email</th>
            <th className="action">EDIT</th>
            <th className="action">Delete</th>
          </tr>
        </thead>
        <tbody>
          <DetailsCom users={users} />
        </tbody>
      </table>

      <div style={{ textAlign: "right" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className="peginationBtn"
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
export default AdminUser;
