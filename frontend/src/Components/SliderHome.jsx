import lum from '../Img/batataFrita.jpg';
// import ldois from '../img/lojadois.jpg';
// import ltres from '../img/lojatres.png';
// import lquatro from '../img/lojaquatro.png';
// import lcinco from '../img/lojacinco.jpg';
// import lseis from '../img/lojaseis.jpg';
// import lsete from '../img/lojasete.jpg';
// import loito from '../img/lojaoito.png';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#5d4103", borderRadius: "100%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#5d4103", borderRadius: "100%" }}
            onClick={onClick}
        />
    );
}

function Responsive() {
    const slides = [
        {
            id: 1,
            hora: "13h - 16h",
            img: lum,
            nome: "Rua das Pernambucanas - Olinda"
        },
        {
            id: 2,
            // img: ldois,
            nome: "Rua do Lavradio - Rio de Janeiro"
        },
        {
            id: 3,
            // img: ltres,
            nome: "Rua XV de Novembro - Curitiba",
        },
        {
            id: 4,
            // img: lquatro,
            nome: "Avenida Paulista - São Paulo",
        },
        {
            id: 5,
            // img: lcinco,
            nome: "Rua Grande - São Luís"
        },
        {
            id: 6,
            // img: lseis,
            nome: "Rua dos Andradas - Porto Alegre"
        },
        {
            id: 7,
            // img: lsete,
            nome: "Rua das Flores - Joinville"
        },
        {
            id: 8,
            // img: loito,
            nome: "Rua das Tartarugas - Pernambuco"
        }
    ];

    const [modalShow, setModalShow] = React.useState(false);
    const [selectedModalData, setSelectedModalData] = React.useState(null);

    const handleOpenModal = (id) => {
        const selectedData = slides.find(slide => slide.id === id);
        setSelectedModalData(selectedData);
        setModalShow(true);
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    initialSlide: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className='row mt-4 p-2 mb-4'>
                    <h3 className='titulo'>Mais Pedidos!🔥</h3>
                </div>
                <div className='row justify-content-center mt-4 mb-4 '>
                    <div className='col mb-4'>
                        <div className='slick'>
                            <Slider {...settings}>
                                {slides.map((d) => (
                                    <button key={d.id} className="cardHome" onClick={() => handleOpenModal(d.id)}>
                                        <div className="image">
                                            <img src={d.img} className='slickimg' alt="" />
                                            <p>{d.nome}</p>
                                        </div>
                                    </button>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalData={selectedModalData}
            />
        </>
    );

    function MyVerticallyCenteredModal(props) {
        const { show, onHide, modalData } = props;

        return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p>Horários - {modalData?.nome}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={5} className='fotomodal'>
                                <img src={modalData?.img} className='slickimg' alt="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='horanormal'>
                                <h5>Horário Normal</h5>
                                <p><b>Seg a sex:</b> 7:30h - 20h<br />
                                    <b>Sab a dom:</b> 8:00h - 18h</p>
                            </Col>
                            <Col>
                                <h5>Feriados</h5>
                                <p><b>Seg a sex:</b> 9:30h - 17:30h<br />
                                    <b>Sab a dom:</b> Fechado</p>
                            </Col>
                        </Row>
                    </Container>


                </Modal.Body>
            </Modal>
        );
    }
}

export default Responsive;
