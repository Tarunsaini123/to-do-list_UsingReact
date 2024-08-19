import React from "react"; 
function Delete(props) {
    
    return(
        <>
            <li>
              {props.item}
              <button onClick={()=>{props.DeleteItem(props.index)}}>Delete</button>
            </li>
        </>
    );
}
export default Delete;