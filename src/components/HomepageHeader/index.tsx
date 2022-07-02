import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";

export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <img className={styles.mainImage} src="img/jack_spearrow.png" />
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">
                    {siteConfig.tagline}
                    <br />
                    A Rustacean 🦀 who in love of learning languages.
                </p>
            </div>
        </header>
    );
}
