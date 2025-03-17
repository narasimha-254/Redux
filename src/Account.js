// import { useSelector } from "react-redux"

import { useSelector } from "react-redux";

// const Account = () => {

//     let data = useSelector((state) => {
//         return state;
//     })

//     return (
//         <div className='container'>
//             <h2 className="text-primary">Account Details</h2>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Balance</th>
//                         <th>user Name</th>
//                         <th>Mobile</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{data.balance}</td>
//                         <td>{data.fullName}</td>
//                         <td>{data.mobile}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Account


const Account = ()=>{
    let data = useSelector((state)=>{
        return state
    })
    return(
        <div className="container">
            <h2 className="text-primary">Account Details</h2>
          <table className="table table-bordered"> 
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>FullName</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.account.balance}</td>
                    <td>{data.account.fullName}</td>
                    <td>{data.account.mobile}</td>
                </tr>
            </tbody>
          </table>

          <h2 className="text-primary">Transaction Details</h2>

          <table className="table table-bordered"> 
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.transaction.map((tr,index)=>(
                        <tr key={index}>
                            <td>{tr.id}</td>
                            <td>{tr.amount}</td>
                            <td>{tr.type}</td>
                            <td>{tr.date.toString()}</td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
    )
}
export default Account;