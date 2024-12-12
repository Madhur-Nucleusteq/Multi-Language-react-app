import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        interpolation: {
            escapeValue: false,
        }
    }, (err) => {
        if (err) {
            console.error('Error during initialization:', err);
        } else {
            console.log('Initialization successful');
        }
    });

console.log('i18n initialized with language:', i18n.language);

export default i18n;
