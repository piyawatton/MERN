import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
    const languageNodes = props.intl.enabledLanguages.map(
        lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
    );
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Todo
                </Link>
                <Link to="/posts" className="navbar-brand">
                    Post
                </Link>
                <Link to="/" className="navbar-brand">
                    B
                </Link>
                <Link to="/" className="navbar-brand">
                    C
                </Link>
            </div>
        </nav>
    );
    return (
        <div className={styles.header}>
            <div className={styles['language-switcher']}>
                <ul>
                    <li><FormattedMessage id="switchLanguage" /></li>
                    {languageNodes}
                </ul>
            </div>
            <div className={styles.content}>
                <h1 className={styles['site-title']}>
                    <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
                </h1>
                {
                    context.router.isActive('/', true)
                        ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
                        : null
                }
            </div>
        </div>
    );
}

Header.contextTypes = {
    router: PropTypes.object,
};

Header.propTypes = {
    toggleAddPost: PropTypes.func.isRequired,
    switchLanguage: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
};

export default Header;
