function Card(props) {
    const { comics } = props;
    return (
       <>
        {   
        comics.map((element)=>{
            const {id,title,description,thumb,price,series,sale_date,type,artist} = element;
            return(
                <div className="card" key={id}>
                    <img src={thumb} alt="" />
                    <h1>{title}</h1>
                </div>
            )

        })
    }

</>
)
}
export default Card;
