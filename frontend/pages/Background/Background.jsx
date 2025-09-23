import LetterGlitch from "../../components/layout/LetterGlitch/LetterGlitch";
import styles from "./Background.module.css";

function Background() {
    return (
        <div className={styles["background"]}>
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={true}
                smooth={true}
            />
        </div>
    );
}

export default Background;
