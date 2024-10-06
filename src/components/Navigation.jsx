import { useState } from "react";
import styles from "./Navigation.module.css";
import { useCrowfund } from "../contexts/CrowfundProvider";

// import Button from "./Button";

function Navigation() {
  const { isMobile } = useCrowfund();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <img src="./images/logo.svg" alt="" />
          <img
            src={isOpen ? './images/icon-close-menu.svg' : "./images/icon-hamburger.svg"}
            alt=""
            onClick={() => setIsOpen(!isOpen)}
            className={styles.hamburgerIcon}
          />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <div>about</div>
            <div>discover</div>
            <div>get started</div>
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <div className={styles.headerDesktopFlex}>
            <img src="./images/logo.svg" alt="" />
          </div>
          <div className={styles.headerDesktopFlex}>
            <div className={styles.headerDesktopItem}>About</div>
            <div className={styles.headerDesktopItem}>Discover</div>
            <div className={styles.headerDesktopItem}>Get Started</div>
            {/* <Button>Sign Up</Button> */}
          </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
