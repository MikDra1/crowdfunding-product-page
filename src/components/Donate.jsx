import { useCrowfund } from "../contexts/CrowfundProvider";
import styles from "./Donate.module.css";
import DonateBlock from "./DonateBlock";

function Donate() {

  const {bambooLeft, blackLeft} = useCrowfund()

  return (
    <section className={styles.donate}>
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <br></br>

      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div className={styles.donateBlocks}>
        <DonateBlock
          title="Bamboo Stand"
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
          price="25"
          numberLeft={bambooLeft}
          setToWhat='stand'
        />

        <DonateBlock
          title="Black Edition Stand"
          text="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          price="75"
          numberLeft={blackLeft}
          setToWhat='black'
        />

        <DonateBlock
          title="Mahogany Special Edition"
          text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          price="200"
          numberLeft="0"
          isDisabled={true}
        />
      </div>
    </section>
  );
}

export default Donate;
