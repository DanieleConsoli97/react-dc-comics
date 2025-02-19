import NavBar from "./NavBar";
 /*NOTE - adesso per importare l'array passiamo come attributo props(per convensione) che al momento ha come dati un array di oggetti 
 
 props= {links}  
  
 a sua volta links è un uguale all'array di oggetti linksArray che arriva dal padre app.jsx quindi quindi abbiamo che 
  props{
  links=[
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
]}
  //REVIEW -attenzione links è il nome del paramentro che abbiamo passato nel file padre 
 */
//NOTE - in questo caso stiamo andando a passare un oggetto chiamato links con il valore dell'array di oggetti linksArray  che arriva dal padre app.jsx
function Header(props) {
    return (
        <header>
       {/* NOTE - in questo caso stiamo andando a passare un oggetto chiamato links con il valore dell'array di oggetti linksArray  che arriva dal padre app.jsx quindi per accedere al valore scriviamo props.links */}
       <NavBar links= {props.links}/>
        </header>
    );
}



export default Header;
