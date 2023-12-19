import {useTranslation} from "react-i18next";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useState} from "react";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

const WINNERS = [
    {id: "corni", img: "images/corni/corni1.png"},
    {id: "gagarina", img: "images/gagarina/gagarina1.png"},
    {id: "dubcova", img: "images/dubcova/dubcova1.png"},
    {id: "dainenko", img: "images/dainenko/dainenko1.png"},
    {id: "coldun", img: "images/coldun/coldun1.png"},
]

function search(query, t) {
    if (query == "") return WINNERS;

    let res = [];

    for (const el of WINNERS) {
        if (t("winners." + el.id + ".title").toLowerCase().indexOf(query.toLowerCase()) === -1) continue;

        res.push(el)
    }

    return res
}

function WinnersList({winners}) {
    const res = []
    const t = useTranslation().t;


    for(const el of winners){
        res.push(
            <Container className="d-flex flex-row justify-content-between mt-5" fluid="lg">
                <div Style="max-width:40%">
                <Image src={el.img} fluid/>
                </div>

                <div Style="width:500px">
                    <h2>{t("winners." + el.id + ".title")}</h2>
                    <p>{t("winners." + el.id + ".year")}</p>
                    <p>{t("winners." + el.id + ".description")}</p>
                    <Button as={Link} variant="light" to={"/" + el.id}>Узнать больше</Button>
                </div>


            </Container>
        )
    }

    return <>
        {res}
    </>
}

export default function Winners() {
    const t = useTranslation().t;

    const [query, setQuery] = useState("");

    document.title = t("winners.title")

    return <>
        <Container className="d-flex flex-row justify-content-between mt-5" fluid="lg">
            <div>
                <h2>{t("winners.title")}</h2>
                <p>{t("winners.description")}</p>
            </div>

            <Form inline>
                <Form.Control
                    placeholder="Поиск по победителям"
                    aria-label="Поиск по победителям"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </Form>
        </Container>

        <WinnersList winners={search(query, t)}></WinnersList>
    </>
}