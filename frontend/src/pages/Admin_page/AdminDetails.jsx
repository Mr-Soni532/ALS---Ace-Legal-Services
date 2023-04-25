// import { useContext } from "react";
import { useEffect, useState } from "react";
// import DetailsComUser from "../../components/AdminCompo/userDetails";
import "./admin_css/user.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";
// import AdminrContext from "../../context/Admin_page/adminContext/adminContext";
import Loading from "../../components/AdminCompo/Loading";
// import HOST from "../../utils/baseUrl";
import NoDataHere from "../../components/AdminCompo/NoDataHere";

const AdminDetails = () => {
  const [AllAdmins, setAllAdmins] = useState([]);
  const [loading, setloading] = useState(true);

  // async function GetAllAdmins() {
  //   try {
  //     let res = await fetch(`${HOST}/admin/getAllAdmins`);
  //     let data = await res.json();
  //     console.log(data);
  //     setAllAdmins(data);
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.message);
  //   }
  // }
  // const context = useContext(AdminrContext);

  // const [query, setQuery] = useState(null);
  // const [option, setOption] = useState("name");
  // const keys = ["name", "AdminID", "Email"];
  // const { getUser, users, err, loading, deletefun, postAdmin } = context;
  // // const [currentPage, setCurrentPage] = useState(1);
  // // const userPerpage = 4;
  // let data = [...users];

  // const totalPages = Math.ceil(data.length / userPerpage);

  // function sliceTodos() {
  //   const indexOfLastTodo = currentPage * userPerpage;
  //   const indexOfFirstTodo = indexOfLastTodo - userPerpage;
  //   return data.slice(indexOfFirstTodo, indexOfLastTodo);
  // }

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const deletEele = (el) => {
  //   deletefun(el);
  // };

  // const search = (data) => {
  //   return data.filter((item) => {
  //     if (!query) {
  //       return item;
  //     } else {
  //       return keys.some(() => item[option].toLowerCase().includes(query));
  //     }
  //   });
  // };

  // data = search(users);

  useEffect(() => {
    setAllAdmins([]);
    setloading(false);
    // GetAllAdmins();
    // getUser();
  }, []);

  return (
    <div className="UserAdminBoxxx">
      <Headers />
      <div>
        {loading ? (
          <Loading />
        ) : AllAdmins.length === 0 ? (
          <NoDataHere />
        ) : (
          <>
            <SearchBar
            // name="Admin"
            // query={query}
            // setQuery={setQuery}
            // setOption={setOption}
            />
            <div className="contentConatinerCust">
              {/* <DetailsComUser users={sliceTodos()} deletEele={deletEele} /> */}
              {/* <DetailsComUser users={AllAdmins} deletEele={deletEele} /> */}
            </div>

            {/* <div className="PaginationBOXXX">
              <DoubleLeftOutlined
                style={{
                  color: "black",
                  transform: "translateY(5px) translateX(-8px)",
                }}
              />
              <div>
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
              <DoubleRightOutlined
                style={{
                  color: "black",
                  transform: "translateY(5px) translateX(5px)",
                }}
              />
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};
export default AdminDetails;
