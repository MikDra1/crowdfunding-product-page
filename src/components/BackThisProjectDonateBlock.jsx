/* eslint-disable react/prop-types */
import { useCrowfund } from "../contexts/CrowfundProvider";
import styles from "./BackThisProjectDonateBlock.module.css";
import Button from "./Button";

function BackThisProjectDonateBlock({
  isDisabled,
  title,
  price,
  text,
  numberLeft,
  optionName,
  setLeft,
}) {
  const {
    setChooseOption,
    chooseOption,
    handleSubmitPledge,
    pledgeAmount,
    handlePledgeChange,
    setBambooLeft,
    setBlackLeft,
  } = useCrowfund();

  function handleSubmit() {
    if (+pledgeAmount < 0 || !isFinite(+pledgeAmount) || pledgeAmount === "")
      return;
    handleSubmitPledge();
    setLeft === "blackLeft"
      ? setBlackLeft((v) => v - 1)
      : setBambooLeft((v) => v - 1);
  }

  return (
    <div>
      {isDisabled ? (
        <section
          className={`${styles.donateBlock} ${styles.donateBlockDisabled}`}
        >
          <input
            type="radio"
            id={optionName}
            value={optionName}
            onChange={(e) => setChooseOption(e.target.value)}
            checked={chooseOption === optionName}
          />
          <label htmlFor={optionName}>
            <div className={styles.labelContent}>
              <div className={styles.labelContentMain}>
                <h3>{title}</h3>
                <p className={styles.cost}>Pledge ${price} or more </p>
              </div>
              <div className={styles.topLeft}>
                <div>{numberLeft}</div>
                <p>left</p>
              </div>
            </div>
          </label>

          <p className={styles.content}>{text}</p>

          <div className={styles.left}>
            <div>{numberLeft}</div>
            <p>left</p>
          </div>

          <div className={styles.seeLater}>
            <Button>Out of Stock</Button>
          </div>
        </section>
      ) : (
        <section className={styles.donateBlock}>
          <input
            type="radio"
            id={optionName}
            value={optionName}
            onChange={(e) => setChooseOption(e.target.value)}
            checked={chooseOption === optionName}
          />
          <label htmlFor={optionName}>
            <div className={styles.labelContent}>
              <div className={styles.labelContentMain}>
                <h3>{title}</h3>
                {price && (
                  <p className={styles.cost}>Pledge ${price} or more </p>
                )}
              </div>
              <div className={styles.topLeft}>
                {numberLeft && (
                  <>
                    <div>{numberLeft}</div>
                    <p>left</p>
                  </>
                )}
              </div>
            </div>
          </label>

          <p className={styles.content}>{text}</p>

          <div className={styles.left}>
            {numberLeft && (
              <>
                <div>{numberLeft}</div>
                <p>left</p>
              </>
            )}
          </div>

          <div className={styles.seeLater}>
            <p>Enter your pledge</p>

            <div className={styles.seeLaterActions}>
              <div className={styles.inputValue}>
                <div>$</div>
                <input
                  type="number"
                  value={pledgeAmount}
                  onChange={(e) => handlePledgeChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </div>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BackThisProjectDonateBlock;
