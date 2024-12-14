import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';

function FormExample() {
    const { t } = useTranslation();

    return (
        <div>
            <Form className='container border rounded p-4 bg-light mt-5'>
                <Row>
                    <h1 className='text-center fw-bold'>{t('contact_form.contact_us')}</h1>
                </Row>
                <Row className="mb-3 mt-4">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>{t('contact_form.first_name')}</Form.Label>
                        <Form.Control type="text" placeholder={t('contact_form.first_name_placeholder')} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>{t('contact_form.last_name')}</Form.Label>
                        <Form.Control type="text" placeholder={t('contact_form.last_name_placeholder')} />
                    </Form.Group>
                </Row>
                <Row className="mb-3 mt-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>{t('contact_form.email')}</Form.Label>
                        <Form.Control type="email" placeholder={t('contact_form.email_placeholder')} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMobile">
                        <Form.Label>{t('contact_form.mobile')}</Form.Label>
                        <Form.Control type="text" placeholder={t('contact_form.mobile_placeholder')} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>{t('contact_form.address')}</Form.Label>
                        <Form.Control placeholder={t('contact_form.address_placeholder')} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>{t('contact_form.address2')}</Form.Label>
                        <Form.Control placeholder={t('contact_form.address2_placeholder')} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>{t('contact_form.city')}</Form.Label>
                        <Form.Control placeholder={t('contact_form.city_placeholder')} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>{t('contact_form.state')}</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>{t('contact_form.state_placeholder')}</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>{t('contact_form.zip_code')}</Form.Label>
                        <Form.Control placeholder={t('contact_form.zip_code_placeholder')} />
                    </Form.Group>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                            {t('contact_form.submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div >
    );
}

export default FormExample;
