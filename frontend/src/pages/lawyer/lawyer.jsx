
import { useEffect, useState } from "react"
import { Typography,Table, Space } from "antd";

const LawyersPage = ()=>{

    const [ users , setUser ] = useState([])
    const [ loading , setLoading ] = useState(false)
    const [ err, setError ] =useState(false)
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> {console.log(data); setUser(data)})
        .catch((err)=> setError(true))
        .finally(()=> setLoading(false))
    },[])

    return loading?(<h1>Loading...</h1>):
    err?(<h1>Something went wrong</h1>):
    <Table columns={[
        {title:"ID",dataIndex:"id"},
        {title:"Lawyer Image",dataIndex:"userImg"},
        {title:"Email",dataIndex:"email"},
        {title: 'Action',dataIndex:'',render: () => <Space><a>Edit</a><a>Delete</a></Space>}
    ]}
    dataSource={users}
    >
    </Table>
}

export default LawyersPage;