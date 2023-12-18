import {useTranslation} from "react-i18next";
import {Button, ButtonGroup, Container, Nav, Navbar} from "react-bootstrap";

export default function Header() {
    const [t, i18n] = useTranslation();

    return <Navbar className="bg-body-tertiary justify-content-between" >
        <Container fluid>
            <Navbar.Brand href="/">
                <img
                    src="logo.png"
                    height="61px"
                    width="61px"
                    alt="logo"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>


            <Nav>
                <Nav.Link href="/">{t("header.main")}</Nav.Link>
                <Nav.Link href="/winners">{t("header.winners")}</Nav.Link>
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