function FooterBottom (props){
    const {social} = props; 
    return(
        <div className="footer_bottom">
           <button>sing-up now</button>
            <div>
                <ul className="footer_bottom_social">
                    {
                        social.map((element)=>{
                            const {id,img} = element;
                            return (
                                <li key={id} className="social"><img src={img} alt="" /></li>
                            )
                        })


                    }
                </ul>
            </div>
           
                </div>
    )


}
export default FooterBottom;