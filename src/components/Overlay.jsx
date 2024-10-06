import { useCrowfund } from "../contexts/CrowfundProvider";
import styles from "./Overlay.module.css";

function Overlay() {
  const { handleClose, handleCloseThank } = useCrowfund();

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        handleCloseThank();
        handleClose();
      }}
    ></div>
  );
}

export default Overlay;
