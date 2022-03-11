import React from "react";
import Layout from "@theme/Layout";
import DeepBlueSea from "../components/DeepBlueSea";
import HomepageHeader from "../components/HomepageHeader";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={`${siteConfig.title}`}>
            <HomepageHeader />
            <DeepBlueSea />
        </Layout>
    );
}
