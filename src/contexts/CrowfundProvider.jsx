/* eslint-disable react/prop-types */
import useScreenSize from "../hooks/useScreenSize";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const CrowfundContext = createContext();

function CrowdfundProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const [chooseOption, setChooseOption] = useState("");
  const [pledgeAmount, setPledgeAmount] = useState("");
  const [isThankYou, setIsThankYou] = useState(false);
  const [totalSum, setTotalSum] = useState("89,914");
  const [totalBackers, setTotalBackers] = useState("5,007");
  const [bambooLeft, setBambooLeft] = useState(101);
  const [blackLeft, setBlackLeft] = useState(64);
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleCloseThank() {
    setIsThankYou(false);
  }

  function handlePledgeChange(value) {
    setPledgeAmount(value);
  }

  function handleSubmitPledge() {
    setTotalSum((v) => formatNumber(+v.replaceAll(",", "") + +pledgeAmount));
    setIsOpen(false);
    setIsThankYou(true);
    setPledgeAmount("");
    setTotalBackers((v) => formatNumber(+v.replaceAll(",", "") + 1));
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  useEffect(function () {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        handleClose();
      }
    });
  });

  return (
    <CrowfundContext.Provider
      value={{
        isMobile,
        isOpen,
        setIsMobile,
        handleOpen,
        handleClose,
        chooseOption,
        setChooseOption,
        handlePledgeChange,
        pledgeAmount,
        handleSubmitPledge,
        isThankYou,
        handleCloseThank,
        totalSum,
        bambooLeft,
        blackLeft,
        setBambooLeft,
        setBlackLeft,
        totalBackers,
        isBookmarked,
        setIsBookmarked,
      }}
    >
      {children}
    </CrowfundContext.Provider>
  );
}

function useCrowfund() {
  const context = useContext(CrowfundContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { CrowdfundProvider, useCrowfund };
