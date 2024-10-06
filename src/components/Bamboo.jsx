import { useCrowfund } from "../contexts/CrowfundProvider";
import styles from "./Bamboo.module.css";
import Button from "./Button";

function Bamboo() {

  const {handleOpen, isBookmarked, setIsBookmarked, isMobile} = useCrowfund()

  return (
    <section className={styles.bamboo}>
      <img src="./images/logo-mastercraft.svg" alt="" className={styles.bambooIcon} />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.buttons}>
        <Button onClick={handleOpen}>Back this project</Button>
        <div className={`${styles.bookmarkDesktop} ${isBookmarked ? styles.bookmarked : ''}`} onClick={() => setIsBookmarked(v => !v)}>
        <img src={isBookmarked ? "./images/icon-bookmark-green.svg" : './images/icon-bookmark.svg'} alt="" />
        {isMobile ? '' : <p>Bookmark</p>}
        </div>
      </div>
    </section>
  );
}

export default Bamboo;
