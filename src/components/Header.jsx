import NavBar from "./NavBar";
const linksArray=[
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
function Header() {
    return (
        <header>
       {/* NOTE - in questo caso stiamo andando a passare un oggetto chiamato links con il valore dell'array di oggetti linksArray */}
       <NavBar links= {linksArray}/>
        </header>
    );
}



export default Header;
