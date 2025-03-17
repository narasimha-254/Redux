// import { useState } from "react"
// import { useDispatch } from "react-redux"


// const Form = () => {

//     let dispatch = useDispatch()
//     const [amount, setAmount] = useState("");
//     const [fullName,setFullName]=useState('');
//     const [number,setNumber] = useState(null);

//     return (
//         <div className="container">
//             <h2>Form</h2>
//             <div className="row">
//                 <div className="col-4">
//                     <input className="form-control" type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
//                 </div>
//                 <button className="btn btn-primary  col-1"
//                     onClick={() => {
//                         dispatch({ type: 'deposite', payload: amount })
//                         setAmount('')
//                     }}>
//                     Deposit</button>
//                 <button className="btn btn-danger  col-1 mx-2"
//                     onClick={() => {
//                         dispatch({ type: 'withdraw', payload: amount })
//                         setAmount('')
//                     }}>
//                     Withdraw </button>
//             </div>
//             <div className="row mt-2">
//                 <div className="col-4">
//                     <input className="form-control" type="text" placeholder="Enter FullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
//                 </div>
//                 <button className="btn btn-primary  col-1"
//                     onClick={() => {
//                         dispatch({ type: 'nameUpdate', payload: fullName })
//                         setFullName('')
//                     }}>
//                     Update</button>
//             </div>

//             <div className="row mt-2">
//                     <div className="col-4">
//                         <input className="form-control" type="number" placeholder="Enter Your Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
//                     </div>
//                     <button  className="btn btn-primary"
//                     onClick={()=>{
//                         dispatch({type:'mobileUpdate',payload:number})
//                         setNumber('')
//                     }}>Mobile</button>
//             </div>
//             <button  className="btn btn-danger mt-2 col-1"
//                     onClick={()=>{
//                         dispatch({type:'reset'})
//                         setNumber('')
//                     }}>Reset</button>
//         </div>
//     )
// }

// export default Form


import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
    let dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [fullname, setFullName] = useState('')
    const [mobile, setMobile] = useState(null)
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-4'>
                    <input className='form-control' placeholder='Enter Amount' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className='btn btn-primary col-1'
                    onClick={() => {
                        dispatch({ type: 'deposite', payload: amount })
                        setAmount('')
                    }}>Deposit</button>
                <button className='btn btn-primary col-1 mx-2'
                    onClick={() => {
                        dispatch({ type: 'withdraw', payload: amount })
                        setAmount('')
                    }}>Withdraw</button>
            </div>

            <div className='row mt-2'>
                <div className='col-4'>
                    <input className='form-control' placeholder='Enter FullName' type='text' value={fullname} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <button className='btn btn-primary col-1'
                    onClick={() => {
                        dispatch({ type: 'updateName', payload: fullname })
                        setFullName('')
                    }}>Update</button>

            </div>

            <div className='row mt-2    '>
                <div className='col-4'>
                    <input className='form-control' placeholder='Mobile Number' type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <button className='btn btn-primary col-1'
                    onClick={() => {
                        dispatch({ type: 'updateNumber', payload: mobile })
                        setMobile('')
                    }}>Mobile</button>
            </div>
            <button className='btn btn-primary col-1 mt-2'
                    onClick={() => {
                        dispatch({ type: 'reset'})
                    }}>Reset</button>

        </div>
    )
}

export default Form