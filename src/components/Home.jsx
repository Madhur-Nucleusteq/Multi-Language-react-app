import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import elonImage from '../images/elon.jpg';
import tesla from '../images/tesla.avif';
import spacex from '../images/spacex.jpg';
import companies from '../images/companies.png';

function Content() {
    const { t } = useTranslation();

    return (
        <Container className="text-center">
            <Row className='my-5'>
                <Col md={4} className='mx-5'>
                    <Card className="border-0 mt-4">
                        <Card.Img variant="top" src={elonImage} style={{
                            borderRadius: "10%", height: '450px', width: '350px'
                        }} />
                    </Card>
                </Col>
                <Col md={6} className="text-center mt-3">
                    <h1 className='fw-bold'>{t('home.title')}</h1>
                    <p style={{ textAlign: "left" }}>{t('home.elon_musk_biography')}</p>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col md={7} className="text-center">
                    <h2 className='fw-bold'>{t('home.tesla_title')}</h2>
                    <p style={{ textAlign: "left" }}>{t('home.elon_musk_biography_tesla')}</p>
                </Col>
                <Col md={5}>
                    <Card className="border-0 mt-4">
                        <Card.Img variant="top" src={tesla} style={{
                            borderRadius: "10%", height: "500px"
                        }} />
                    </Card>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col md={4}>
                    <Card className="border-0 mt-4">
                        <Card.Img variant="top" className="border-none" src={spacex} style={{
                            borderRadius: "10%", height: '400px'
                        }} />
                    </Card>
                </Col>
                <Col md={8} className="text-center px-5">
                    <h2 className='fw-bold'>{t('home.spacex_title')}</h2>
                    <p style={{ textAlign: "left" }}>{t('home.elon_musk_biography_spacex')}</p>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col md={5} className="text-center">
                    <h2 className='fw-bold'>{t('home.other_title')}</h2>
                    <p style={{ textAlign: "left" }}>{t('home.elon_musk_biography_other')}</p>
                </Col>
                <Col md={6}>
                    <Card className="mt-4 border-0">
                        <Card.Img
                            variant="top"
                            src={companies}
                            style={{ height: "350px", width: "700px" }}
                        />
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Content;
