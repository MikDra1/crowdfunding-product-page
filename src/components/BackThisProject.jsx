import { useCrowfund } from "../contexts/CrowfundProvider";
import styles from "./BackThisProject.module.css";
import BackThisProjectDonateBlock from "./BackThisProjectDonateBlock";

function BackThisProject() {
  const { handleClose, blackLeft, bambooLeft,  } = useCrowfund();

  return (
    <section className={styles.backThisProject}>
      <div className={styles.backThisProjectContent}>
     <div className={styles.top}>
     <div >
          <h2>Back this project</h2>
          <div onClick={handleClose}><img src="./images/icon-close-modal.svg" alt="" /></div>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
     </div>
        <div className={styles.radioButtonsContainer}>
        <BackThisProjectDonateBlock
            title="Pledge with no reward"
            text="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive produce updates via email."
            optionName="no"
          />

          
          <BackThisProjectDonateBlock
            title="Bamboo Stand"
            text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
            price="25"
            numberLeft={bambooLeft}
            setLeft='bambooLeft'
            optionName="stand"
            startingPledge='25'
          />

          <BackThisProjectDonateBlock
            title="Black Edition Stand"
            text="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            price="75"
            numberLeft={blackLeft}
            optionName="black"
            setLeft='blackLeft'
            startingPledge='75'
          />

          <BackThisProjectDonateBlock
            title="Mahogany Special Edition"
            text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            price="200"
            numberLeft="0"
            isDisabled={true}
            optionName="mahogany"
          />
        </div>
      </div>
    </section>
  );
}

export default BackThisProject;
