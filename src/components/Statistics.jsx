import { useCrowfund } from "../contexts/CrowfundProvider";
import styles from "./Statistics.module.css";

function Statistics() {
  const { totalSum, totalBackers } = useCrowfund();

  return (
    <section className={styles.statistics}>
        <div>
      <div className={styles.borderBottom}>
        <h2>${totalSum}</h2>
        <p>of $100,000 backed</p>
      </div>

      <div className={styles.borderBottom}>
        <h2>{totalBackers}</h2>
        <p>total backers</p>
      </div>

      <div>
        <h2>56</h2>
        <p>days left</p>
      </div>
      </div>

      <progress value={+totalSum.replaceAll(',', '')} max={100000}></progress>
    </section>
  );
}

export default Statistics;
