import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

function MyFooter() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark px-5">
            <Navbar.Brand href="/">{t('navbar.app_name')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">{t('navbar.home')}</Nav.Link>
                    <Nav.Link href="/form">{t('contact_form.contact_us')}</Nav.Link>
                    <NavDropdown title={t('navbar.language')} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('fr')}>French</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('es')}>Spanish</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('de')}>German</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('hi')}>Hindi</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default MyFooter;