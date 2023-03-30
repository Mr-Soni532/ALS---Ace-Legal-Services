import { Typography,Table, Space } from "antd";

import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsCom from "../../component/AdminCompo/userDetails";
import LawyerContext from "../../context/Admin_page/lawyercontext/lawyerContext";
import "../../utlis/admin_css/content.css"

const UserDetails  = () =>{
    const context= useContext(LawyerContext)
    const [ loading , setLoading ] = useState(false)
    const [ err, setError ] =useState(false)
    const {getLawyer , lawyers} = context
    useEffect(()=>{
        setLoading(true)
        getLawyer()
        .then((data)=> {console.log(data);})
        .catch((err)=> setError(true))
        .finally(()=> setLoading(false))
    },[])

    return loading?(<h1>Loading...</h1>):
    err?(<h1>Something went wrong</h1>):
    (<table className='table table-striped'>
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
            <DetailsCom users={lawyers}/>
        </tbody>
    </table>)
    
}
export default UserDetails;