import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

const IMAGES = new Map(Object.entries({
    "corni": [
        "images/corni/corni1.png",
        "images/corni/corni2.png",
        "images/corni/corni3.png",
        "images/corni/corni4.png",
        "images/corni/corni5.png",
    ],
    "coldun": [
        "images/coldun/coldun1.png",
        "images/coldun/coldun2.png",
        "images/coldun/coldun3.png",
        "images/coldun/coldun4.png",
        "images/coldun/coldun5.png",
    ],
    "dainenko": [
        "images/dainenko/dainenko1.png",
        "images/dainenko/dainenko2.png",
        "images/dainenko/dainenko3.png",
        "images/dainenko/dainenko4.png",
        "images/dainenko/dainenko5.png"
    ],
    "dubcova": [
        "images/dubcova/dubcova1.png",
        "images/dubcova/dubcova2.png",
        "images/dubcova/dubcova3.png",
        "images/dubcova/dubcova4.png",
        "images/dubcova/dubcova5.png",
    ],
    "gagarina": [
        "images/gagarina/gagarina1.png",
        "images/gagarina/gagarina2.png",
        "images/gagarina/gagarina3.png",
        "images/gagarina/gagarina4.png",
        "images/gagarina/gagarina5.png",
    ],
}));

const YOUTUBE = new Map(Object.entries({
        "corni": "https://www.youtube.com/embed/D_cWlQwIFRc",
        "gagarina": "https://www.youtube.com/embed/BMTv-ydpTNc&ab",
        "dubcova": "https://www.youtube.com/embed/q2tGQwTl4vk",
        "dainenko": "https://www.youtube.com/embed/GUAspcurQOw",
        "coldun": "https://www.youtube.com/embed/Yrdipo5FSOU",
    }
))

const MAP = new Map(Object.entries({
        "corni": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8965.614300675557!2d37.6028501!3d55.8209541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536135b827039%3A0xedcdce7a82f6e8ac!2z0J7RgdGC0LDQvdC60LjQvdC-INCf0KDQng!5e0!3m2!1sru!2sby!4v1702940255491!5m2!1sru!2sby",
        "gagarina": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8965.614300675557!2d37.6028501!3d55.8209541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536135b827039%3A0xedcdce7a82f6e8ac!2z0J7RgdGC0LDQvdC60LjQvdC-INCf0KDQng!5e0!3m2!1sru!2sby!4v1702940255491!5m2!1sru!2sby",
        "dubcova": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8965.614300675557!2d37.6028501!3d55.8209541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536135b827039%3A0xedcdce7a82f6e8ac!2z0J7RgdGC0LDQvdC60LjQvdC-INCf0KDQng!5e0!3m2!1sru!2sby!4v1702940255491!5m2!1sru!2sby",
        "dainenko": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8965.614300675557!2d37.6028501!3d55.8209541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536135b827039%3A0xedcdce7a82f6e8ac!2z0J7RgdGC0LDQvdC60LjQvdC-INCf0KDQng!5e0!3m2!1sru!2sby!4v1702940255491!5m2!1sru!2sby",
        "coldun": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8965.614300675557!2d37.6028501!3d55.8209541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536135b827039%3A0xedcdce7a82f6e8ac!2z0J7RgdGC0LDQvdC60LjQvdC-INCf0KDQng!5e0!3m2!1sru!2sby!4v1702940255491!5m2!1sru!2sby",
    }
))

export default function Winner() {
    const {t} = useTranslation();
    const {id} = useParams();

    const images = IMAGES.get(id);

    let imageItems = [];

    document.title = t(`winner.${id}.title`)

    for (let i = 1; i < images.length; i++) {
        imageItems.push(
            <Carousel.Item>
                <div className="d-flex" Style="max-height:500px">
                    <img className="d-block image" src={images[i]} Style="max-width:80%; margin:auto"/>
                </div>
            </Carousel.Item>
        )
    }

    let timeItems = [];

    for (const time of t("winner." + id + ".biography", {returnObjects: true})) {
        timeItems.push(
            <TimelineItem
                dateText={time.year}
            >
                <div Style="color:var(--bs-body-color)">
                    <h2>
                        {time.title}
                    </h2>
                    <p>
                        {time.description}
                    </p>
                </div>
            </TimelineItem>
        )
    }

    return <>
        <Container className="d-flex flex-row justify-content-between mt-5" fluid="lg">
            <div Style="max-width:50%">
                <Image src={images[0]} fluid/>
            </div>

            <div Style="width:500px; white-space: pre-wrap;">
                <h2>{t("winner." + id + ".title")}</h2>
                <p>{t("winner." + id + ".shortDescription")}</p>
                <p>{t("winner." + id + ".description")}</p>
            </div>
        </Container>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                {t("winner.gallery")}
            </h2>
        </Container>

        <Container>
            <Carousel data-bs-theme="light">
                {imageItems}
            </Carousel>
        </Container>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                {t("winner.biography")}
            </h2>
        </Container>

        <Timeline lineColor={"#fff"}>
            {timeItems}
        </Timeline>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                {t("winner.performance")}
            </h2>
            <p>{t(`winner.${id}.performance`)}</p>
            <iframe width="700" height="400" src={YOUTUBE.get(id)} allowFullScreen/>
        </Container>

        <Container className="mt-5" Style="width:fit-content">
            <h2 Style="width: fit-content">
                {t("winner.place")}
            </h2>
            <p>{t(`winner.${id}.place`)}</p>

            <iframe width="700" height="400" loading="lazy" src={MAP.get(id)} allowFullScreen/>
        </Container>
    </>
}