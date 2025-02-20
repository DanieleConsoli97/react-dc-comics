import Card from "./Card.jsx";

function MainTop(props) {
    return (
        <div className="main_top">
            <div className="container_80">
            <div className="cards_top">
                <Card comics={props.comics} />
            </div>
            </div>
        </div>
    )
}
export default MainTop; 