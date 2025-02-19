const links=[
    {id:1,text: "characters", url: "#"},
    {id:2,text: 'comics', url: '#'},
    {id:3,text: 'movies', url: '#'},
    {id:4,text: 'tv', url: '#'},
    {id:5,text: 'games', url: '#'},
    {id:6,text: 'collectibles', url: '#'},
    {id:7,text: 'videos', url: '#'},
    {id:8,text: 'fans', url: '#'},
    {id:9,text: 'news', url: '#'},
    {id:10,text: 'shop', url: '#'}
]

function NavBar(props) { 
    return (
        <div className="nav_bar row container_80">
            <div className="img col">
                <img src="./img/dc-logo.png" alt="logo.png" />
            </div>
            <div className="link col">
                <ul className="list">
                    {
                        links.map((element)=>{
                            return <li key={element.id}>{element.text}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        )
}
export default NavBar;