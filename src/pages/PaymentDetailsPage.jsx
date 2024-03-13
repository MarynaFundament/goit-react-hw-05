// import { useParams, NavLink, Outlet } from "react-router-dom"
// import { useEffect } from "react"
// // import { getPaymentById } from "../../payments-api"
// import { useState } from "react";

// export default function PaymentsDetailsPage(){
//     const { PaymentId } = useParams();
//     const [payment, setPayment] = useState(null)


//     useEffect(() => {
//         async function getData(){
//             try {
//                 const data = await getPaymentById(PaymentId)
//                 setPayment(data)

//             } catch(error){

//             }
//         }
//         getData()
//     }, [PaymentId])

//     return (
//     <div>
//         <h1>PaymentsDetailsPage: {PaymentId} </h1>

//         {payment && (
//             <div>
//                 <p> Amount: {payment.amount}</p>
//                 <p> Number: {payment.number} </p>
//             </div>
//         )}

//         <ul>
//             <li>
//                 <NavLink to="subpage-a"> Subpage A</NavLink>
//             </li>

//             <li>
//                 <NavLink to="subpage-b"> Subpage B</NavLink>
//             </li>
//         </ul>

//         <Outlet/>
//     </div>

//     )     
// };