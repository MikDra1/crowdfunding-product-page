import { useCrowfund } from '../contexts/CrowfundProvider'
import Button from './Button'
import styles from './ThankYouPage.module.css'

function ThankYouPage() {

    const {handleCloseThank} = useCrowfund()

    return (
        <section className={styles.thankYou} >
            <img src="./images/icon-check.svg" alt="" />
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get and email once our campaign is completed.</p>

            <Button onClick={handleCloseThank} >Got it!</Button>
        </section>
    )
}

export default ThankYouPage
