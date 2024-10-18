function Child1(props){
    console.log(props)
    return(
        <>
        <p>
            {props.children}
        </p>
        </>
    )
}
export default Child1;