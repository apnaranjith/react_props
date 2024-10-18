
function Child(props){
    console.log(props);
    var red_val=props.children.map((val,ind)=>{
        return(
            <>
            <span>
            <p key={ind} >{props.children[ind]["id"]}</p>
            <p key={ind} >{props.children[ind]["title"]}</p>
            <p key={ind} >{props.children[ind]["price"]}</p>
            <p key={ind} ><img src={props.children[ind]["image"]} alt="jpg" height="100" /></p>
            </span>
            </>
        )

    })
    return(
        <>
      
         <p>{red_val}</p>
         

    
        </>
    )
} 
export default Child;