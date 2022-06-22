// import React, {useEffect} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import Card from "../Card/Card";
// import { getDogs } from "../../actions";

// export default function Cards(){
//     let dogState = useSelector(state => state.dogs)
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         dispatch(getDogs())
//     }, [])

//     return(
//         <div>
//         {dogState.length > 0 ? ( 
//             dogState.map(d=>(
//                 <Link to={`/dogs/${d.id}`}>
//                     <Card name={d.name} image={d.image} temperament={d.temperament} weight={d.weight}></Card>
//                 </Link>
//             ))
//         ) : (
//             <h2>safassa</h2>
//         )}
//         </div>
          
//     )
    

// }



            