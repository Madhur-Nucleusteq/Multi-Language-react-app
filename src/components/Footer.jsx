import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

function MyFooter() {
    const { t } = useTranslation();
    return (
        <Card className="text-center mt-5 text-light p-3" style={{ backgroundColor: "black" }}>
            <p className='fs-6'>{t('navbar.app_name')}</p>
            <p style={{ fontSize: "14px" }} className='mx-5 px-5'>
                {t('lorem50')}
            </p>
            <p><a href='/form' className='text-light'>{t('contact_form.contact_us')}</a></p>

        </Card>
    );
}

export default MyFooter;