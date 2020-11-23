import Head from "next/head";
import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Header, headerPageState } from "../components/header";
import { LoadingCover } from "../components/loading_cover";
import ScrapboxTitles from "../components/scrapbox_titles";
import styles from "../styles/Home.module.css";

const countState = atom({
    key: "countState",
    default: 0,
});

export default function Home() {
    const pageIndex = useRecoilValue(headerPageState);

    const buildContents = (index: number): JSX.Element => {
        switch (index) {
            case 0:
                return <Counter />;
            case 1:
                return <div></div>;
            case 2:
                return <div></div>;
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ScrapboxTitles />
            <div className={styles.contents}>{buildContents(pageIndex)}</div>
            <LoadingCover />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useRecoilState(countState);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <>
            <p>count {count}</p>
            <button onClick={incrementCount}>+1</button>
        </>
    );
}
