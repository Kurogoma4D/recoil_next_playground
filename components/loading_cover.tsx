import { atom, useRecoilValue } from "recoil";
import styles from "../styles/loading_cover.module.scss";

export const loadingState = atom({
    key: "loadingState",
    default: false,
});

export const LoadingCover = () => {
    const isLoaded = useRecoilValue(loadingState);

    return (
        <>
            <div className="loading_cover">
                <div className={styles.loading_animation_element}></div>
            </div>
            <style jsx>{`
                .loading_cover {
                    background-color: #00796b;
                     {
                        /* opacity: ${isLoaded ? "0" : "1"}; */
                    }
                    width: 100%;
                    position: absolute;
                    top: 0;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    transition: opacity 550ms ease-in-out;
                }
            `}</style>
        </>
    );
};
