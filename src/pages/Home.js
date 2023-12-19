import Header from "../components/Header";
import {Button, Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function Developers() {
    const t = useTranslation().t;

    const mql = window.matchMedia('(max-width: 600px)');

    if(!mql.matches){
         return <Container className="mt-5" fluid>

            <Row>
                <Col className="d-flex flex-row">
                    <div Style="width:25%; min-width:25%">
                        <Image src="images/developers/smychek.png" fluid/>
                    </div>

                    <div className="ms-3">
                        <h2>{t("home.developers.smyc")}</h2>
                        <p>GitHub: VILEHIH</p>
                    </div>
                </Col>

                <Col className="d-flex flex-row">
                    <div Style="width:25%; min-width:25%">
                        <Image src="images/developers/mihey.png" fluid/>
                    </div>

                    <div className="ms-3">
                        <h2>{t("home.developers.mihey")}</h2>
                        <p>GitHub: Orgyflame</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex flex-row">
                    <div Style="width:25%; min-width:25%">
                        <Image src="images/developers/litvin.png" fluid/>
                    </div>

                    <div className="ms-3">
                        <h2>{t("home.developers.litvin")}</h2>
                        <p>GitHub: Radium000</p>
                    </div>
                </Col>

                <Col className="d-flex flex-row">
                    <div Style="width:25%; min-width:25%">
                        <Image src="images/developers/volkov.png" fluid/>
                    </div>

                    <div className="ms-3">
                        <h2>{t("home.developers.volk")}</h2>
                        <p>GitHub: clownsort</p>
                    </div>
                </Col>
            </Row>
        </Container>
    }
    return <>

        <Container className="d-flex flex-row mt-5" fluid>
            <div Style="width:25%; min-width:25%">
                <Image src="images/developers/smychek.png" fluid/>
            </div>

            <div className="ms-3">
                <h2>{t("home.developers.smyc")}</h2>
                <p>GitHub: VILEHIH</p>
            </div>
        </Container>

        <Container className="d-flex flex-row mt-2" fluid>
            <div Style="width:25%; min-width:25%">
                <Image src="images/developers/mihey.png" fluid/>
            </div>

            <div className="ms-3">
                <h2>{t("home.developers.mihey")}</h2>
                <p>GitHub: Orgyflame</p>
            </div>
        </Container>


        <Container className="d-flex flex-row mt-2" fluid>
            <div Style="width:25%; min-width:25%">
                <Image src="images/developers/litvin.png" fluid/>
            </div>

            <div className="ms-3">
                <h2>{t("home.developers.litvin")}</h2>
                <p>GitHub: Radium000</p>
            </div>
        </Container>

        <Container className="d-flex flex-row mt-2" fluid>
            <div Style="width:25%; min-width:25%">
                <Image src="images/developers/volkov.png" fluid/>
            </div>

            <div className="ms-3">
                <h2>{t("home.developers.volk")}</h2>
                <p>GitHub: clownsort</p>
            </div>
        </Container>
    </>

}

function Home() {
    const t = useTranslation().t;

    document.title = t("home.star-factory.title")

    return <>
        <Container className="justify-content-between d-flex flex-row mb-5 mt-5">
            <div Style="max-width: 60%;">
                <Image src="images/fabrica-zvezd.png" fluid/>
            </div>

            <div className="ms-5">
                <h2>
                    {t("home.star-factory.title")}
                </h2>
                <p>
                    {t("home.star-factory.description")}
                </p>
            </div>
        </Container>

        <Container className="mt-5" Style="min-width:40%">
            <h2>{t("home.content.title")}</h2>
            <p>{t("home.content.description")}</p>
        </Container>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                {t("home.day-winner.title")}
            </h2>
        </Container>

        <Container>


            <div className="d-flex flex-row">
                <div Style="max-width: 50%;">
                    <Image
                        src="images/dainenko/dainenko1.png"
                        fluid
                    />
                </div>

                <div className="ms-5">
                    <h2>
                        {t("home.day-winner.name")}
                    </h2>
                    <p>
                        {t("home.day-winner.description")}
                    </p>

                    <Button variant="light" as={Link} to="/dainenko">Узнать больше</Button>
                </div>
            </div>
        </Container>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                Наши разработчики
            </h2>
        </Container>

        <Developers/>
    </>
}

export default Home;