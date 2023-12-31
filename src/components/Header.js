import {useTranslation} from "react-i18next";
import {Button, ButtonGroup, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header() {
    const [t, i18n] = useTranslation();

    return <Navbar className="bg-body-tertiary justify-content-between" >
        <Container fluid>
            <Navbar.Brand as={Link} to="/">
                <img
                    src="logo.png"
                    height="61px"
                    width="61px"
                    alt="logo"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>


            <Nav>
                <Nav.Link as={Link} to="/">{t("header.main")}</Nav.Link>
                <Nav.Link as={Link} to="/winners">{t("header.winners")}</Nav.Link>
            </Nav>
            {/*<Nav>*/}
            {/*    <img src="instagram-icon.svg" />*/}
            {/*    <img src="telegram-icon.svg"/>*/}
            {/*</Nav>*/}

            <ButtonGroup>
            <Button onClick={() => i18n.changeLanguage("ru")}
                    variant={i18n.language === "ru" ? "light" : "dark"}
                >
                    Ru
                </Button>
                <Button onClick={() => i18n.changeLanguage("en")}
                        variant={i18n.language === "en" ? "light" : "dark"}
                >
                    En
                </Button>
            </ButtonGroup>

        </Container>
    </Navbar>
}