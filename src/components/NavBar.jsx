
function NavBar(props) { 
  const {links} = props;
    return (
        <div className="nav_bar row container_80">
            <div className="img col">
                <img src="./img/dc-logo.png" alt="logo.png" />
            </div>
            <div className="link col">
                <ul className="list">
                    {
                        links.map((element)=>{
                           const {id,text} = element;
                            return(
                            <li key={id}>{text}</li>
                        )
                        })
                    }
                </ul>
            </div>
        </div>
        )
}
export default NavBar;