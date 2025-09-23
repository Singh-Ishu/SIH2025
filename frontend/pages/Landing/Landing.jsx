import TextType from "../../components/shared/TextType/TextType";
import styles from "./Landing.module.css";

function Landing() {
    return (
        <div className={styles["landing-container"]}>
            <h1 className={styles["landing-title"]}>WIPER</h1>
            {/* <TextType
                text={[
                    "The Ultimate Data Wiping Solution.",
                    "Clean, Purge or Exterminate.",
                    "Securely Erase Your Data. FOREVER.",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
            /> */}
        </div>
    );
}
export default Landing;
