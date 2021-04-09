const Obj = ({title, description, progress, creationDate, idx}) => {
    return(
        <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h3>{progress}</h3>
            <h3>{creationDate}</h3>
            <h3>{idx} </h3> 
        </> 
    )
}

export default Obj
