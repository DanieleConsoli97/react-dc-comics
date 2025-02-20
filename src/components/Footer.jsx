import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
function Footer(props) {
    return (
        <footer>
            <div>
                <FooterTop />
                <FooterBottom social={props.social} />
            </div>
        </footer>
    );
}
export default Footer;
