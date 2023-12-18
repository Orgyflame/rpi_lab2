import Header from "../components/Header";
import {Button, Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import {useTranslation} from "react-i18next";

function Home() {
    const t = useTranslation().t;

    document.title = t("home.star-factory.title")

    return <>
        <Container className="justify-content-between d-flex flex-row mb-5 mt-5">
            <Image src="images/fabrica-zvezd.png"
                   Style="width: 737px;height: 506px;"/>

            <div className="ms-5">
                <h2>
                    {t("home.star-factory.title")}
                </h2>
                <p>
                    {t("home.star-factory.description")}
                </p>
            </div>
        </Container>

        <Container className="mt-5" Style="width:500px">
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
                <Image
                    src="images/dainenko/dainenko1.png"
                    Style="width:551px;height:694px"
                />

                <div className="ms-5">
                    <h2>
                        {t("home.day-winner.name")}
                    </h2>
                    <p>
                        {t("home.day-winner.description")}
                    </p>

                    <Button variant="light" href="/dainenko">Узнать больше</Button>
                </div>
            </div>
        </Container>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                Наши разработчики
            </h2>
        </Container>

        <Container className="mt-5" fluid>

            <Row>
                <Col className="d-flex flex-row">
                    <Image src="images/developers/smychek.png"/>

                    <div>
                        <h2>{t("home.developers.smyc")}</h2>
                        <p>GitHub: VILEHIH</p>
                    </div>
                </Col>

                <Col className="d-flex flex-row ms-5">
                    <Image src="images/developers/mihey.png"/>

                    <div>
                        <h2>{t("home.developers.mihey")}</h2>
                        <p>GitHub: Orgyflame</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex flex-row">
                    <Image src="images/developers/litvin.png"/>

                    <div>
                        <h2>{t("home.developers.litvin")}</h2>
                        <p>GitHub: Radium000</p>
                    </div>
                </Col>

                <Col className="d-flex flex-row">
                    <Image src="images/developers/volkov.png"/>

                    <div>
                        <h2>{t("home.developers.volk")}</h2>
                        <p>GitHub: clownsort</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default Home;