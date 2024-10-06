/* eslint-disable react/prop-types */
import { useCrowfund } from "../contexts/CrowfundProvider";
import Button from "./Button";
import styles from "./DonateBlock.module.css";

function DonateBlock({
  title,
  price,
  text,
  numberLeft,
  isDisabled,
  setToWhat,
}) {
  const { handleOpen, setChooseOption } = useCrowfund();

  return (
    <div>
      {isDisabled ? (
        <section
          className={`${styles.donateBlock} ${styles.donateBlockDisabled}`}
        >
          <div className={styles.top}>
            <h3>{title}</h3>
            <p className={styles.cost}>Pledge ${price} or more </p>
          </div>
          <p>{text}</p>

         <div className={styles.bottom}>
         <div className={styles.left}>
            <div>{numberLeft}</div>
            <p>left</p>
          </div>

          <Button>Out of Stock</Button>
         </div>
        </section>
      ) : (
        <section className={styles.donateBlock}>
          <div className={styles.top}>
            <h3>{title}</h3>
            <p className={styles.cost}>Pledge ${price} or more </p>
          </div>
          <p>{text}</p>

          <div className={styles.bottom}>
            <div className={styles.left}>
              <div>{numberLeft}</div>
              <p>left</p>
            </div>

            <Button
              onClick={() => {
                handleOpen();
                setChooseOption(setToWhat);
              }}
            >
              Select Reward
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}

export default DonateBlock;
