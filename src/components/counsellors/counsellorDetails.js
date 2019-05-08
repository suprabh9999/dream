import React from 'react';

export const CounsellorDetails = (props) => {
    return(
        <div style={{border:'1px solid grey', boxShadow:'10px 10px grey', padding : '10px',
            borderRadius:'10px', width:'95%', margin:'auto', marginTop:'10px'}}>

            { getDetailedObj( props.detailedObj ) }
        
        </div>
    );
};

const getDetailedObj = (detailedObj) => {
    const objArr = Object.entries( detailedObj );

    const obj = objArr.map((arr, index) => 
    <div key={index}>
        <div style={{display:'flex', justifyContent:'space-between', margin : '0 5px'}}> 
            <div style={{marginRight : '20px'}}> { arr[0] } </div>
            <div>{ arr[1] }</div>
        </div>
        <div style={{height:'2px', backgroundColor:'grey', margin :'5px'}} />
    </div> );

     return obj;
}
