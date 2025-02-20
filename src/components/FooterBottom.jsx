function FooterBottom (props){
    const {social} = props; 
    return(
        <div className="footer_bottom">
            <div> <button>sing-up now</button></div>
            <div>
                <ul className="footer_bottom_social">
                    {
                        social.map((element)=>{
                            const {img} = element;
                            return (
                                <li className="social"><img src={img} alt="" /></li>
                            )
                        })


                    }
                </ul>
            </div>
           
                </div>
    )


}
export default FooterBottom;