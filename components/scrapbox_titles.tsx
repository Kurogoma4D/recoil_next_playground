import Axios from "axios";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import styles from "../styles/scrapbox_titles.module.css";

const MAX_MAP = 12;

interface ScrapboxResponse {
    pages: Array<ScrapboxPages>;
}

interface ScrapboxPages {
    title: string;
}

interface TextLengthElement {
    index: number;
    length: number;
}

export const scrapboxTitles = atom<string[]>({
    key: "scrapboxDataSource",
    default: [],
});

function organizeTitles(base: string[]): string[] {
    const lengthMap = base.map<TextLengthElement>((e, index) => {
        return { index: index, length: e.length };
    });
    const result: TextLengthElement[][] = [];

    for (const element of lengthMap) {
        if (result.length < MAX_MAP) {
            result.push([element]);
        } else {
            const sumMap = result.map((e) =>
                e.map((e) => e.length).reduce((p, c) => p + c)
            );
            var minIndex = 0;
            sumMap.map((e, index) =>
                e < sumMap[minIndex]
                    ? (minIndex = index)
                    : (minIndex = minIndex)
            );
            result[minIndex].push(element);
        }
    }

    return result.map((r) => r.map((e) => base[e.index]).join(" "));
}

function ScrapboxTitles() {
    const titles = useRecoilValue(scrapboxTitles);
    const [_, setData] = useRecoilState(scrapboxTitles);

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get<ScrapboxResponse>("api/scrapbox");
            const data = response.data;

            const mappedTitles = data.pages.map((e) => e.title);

            setData(organizeTitles(mappedTitles));
        };
        fetchData();
    }, []);

    if (titles === []) return <div>Loading</div>;

    return (
        <div className={styles.container}>
            {titles.map((e) => (
                <p className={styles.text} key={e.substring(0, 12)}>
                    {e}
                </p>
            ))}
        </div>
    );
}

export default ScrapboxTitles;
