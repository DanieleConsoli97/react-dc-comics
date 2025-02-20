import MainBottom from "./MainBottom";
import MainTop from "./MainTop";

function Main(props) {
    return (
        <main>
            <MainTop comics={props.comics} />
            <MainBottom />
        </main>
    );
}
export default Main;
