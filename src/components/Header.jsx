import NavBar from "./NavBar";

function Header(props) {
    return (
        <header>
            console.log({props})
            <NavBar links= {props}/>
        </header>
    );
}
export default Header;
