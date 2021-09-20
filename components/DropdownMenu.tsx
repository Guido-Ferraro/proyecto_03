import { PropsWithChildren, useEffect, useState } from "react";
import styles from "../styles/DropdownMenu.module.css";
import Image from "next/image";
import menu_icon from "../public/menu_icon.png";
// eslint-disable-next-line @typescript-eslint/ban-types
const DropdownMenu = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (): void => {
    const menuView = document.getElementById("menuView") as HTMLElement;
    setIsDisabled(true);
    setMenu((toggle) => !toggle);
    if (menu) {
      menuView.style.transform = "translateY(-150px)";
      setTimeout(() => {
        menuView.style.display = "none";
      }, 400);
    } else {
      menuView.style.display = "block";
      setTimeout(() => {
        menuView.style.transform = "translateY(150px)";
      }, 1);
    }
    setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  const listener = (e: Event) => {
    const menuView = document.getElementById("menuView") as HTMLElement;
    const menuButton = document.getElementById("menuButton") as HTMLElement;
    if (
      !menuView?.contains(e.target as Node) &&
      !menuButton?.contains(e.target as Node) &&
      menu
    ) {
      console.log("click");
      setMenu(false);
      menuView.style.transform = "translateY(-150px)";
      setTimeout(() => {
        menuView.style.display = "none";
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  });

  return (
    <>
      <div className={styles.menu} id="menuView">
        <nav className={styles.nav}>{children}</nav>
      </div>
      <button
        className={styles.menuButton}
        onClick={handleClick}
        disabled={isDisabled}
        id="menuButton"
      >
        <Image
          src={menu_icon}
          alt="menu_icon"
          className={styles.image}
          width={22}
          height={18}
        ></Image>
      </button>
    </>
  );
};

export default DropdownMenu;
