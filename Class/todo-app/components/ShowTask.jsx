const ShowTask = ({item}) =>{
    return(
        <>
            <h1>{item.task}</h1>
            <h3>{item.author}</h3>
            <h4>{item.completed?"completed":"Not Completed"}</h4>
        </>
    )
}

export default ShowTask