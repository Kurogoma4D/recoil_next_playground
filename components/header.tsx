import { atom, useRecoilState } from "recoil";
import styles from "../styles/header.module.css";

export const headerPageState = atom({
    key: 'headerPageState',
    default: 0,
});

export function Header() {
    const [_, setPage] = useRecoilState(headerPageState);

    const onClickPage = (pageIndex: number) => setPage(pageIndex);

    return(
        <header className={styles.app_header}>
            <div className={styles.header_element} onClick={(_) => onClickPage(0)}>Element1</div>
            <div className={styles.header_element} onClick={(_) => onClickPage(1)}>Element2</div>
            <div className={styles.header_element} onClick={(_) => onClickPage(2)}>Element3</div>
        </header>
    );
}