import { useState } from "react";

function _template( props ){
    // const[name, setName]= useState( null );
    return(
        <div>
            <h1>_template</h1>
            <p>props: { JSON.stringify( props ) }</p>
        </div>
    )
}

export default _template;