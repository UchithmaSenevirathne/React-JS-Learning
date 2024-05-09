
const Unit = ({image,name,city}) => {
    return (
        <div className="unit_container">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p><span>{city}</span></p>
        </div>
    )
}

export default Unit