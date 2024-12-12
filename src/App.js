import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Multi-Language-App</a>
          <div className="dropdown ms-auto">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t('language')}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
              <li>
                <button className="dropdown-item" onClick={() => changeLanguage('en')}>
                  English
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => changeLanguage('fr')}>
                  Français
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
      </div>
    </div>
  );
}

export default App;
