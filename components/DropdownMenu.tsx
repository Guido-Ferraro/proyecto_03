import { PropsWithChildren, useEffect, useState } from "react";
import styles from "../styles/DropdownMenu.module.css";
import Image from "next/image";
import menu_icon from "../public/menu_icon.png";
// eslint-disable-next-line @typescript-eslint/ban-types
const DropdownMenu = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const menuView = document.getElementById("menuView") as HTMLElement;
    const menuButton = document.getElementById("menuButton") as HTMLElement;
  }, []);

  const handleExitMenu = (): void => {
    menuView.style.transform = "translateY(-150px)";
    setTimeout(() => {
      menuView.style.display = "none";
    }, 400);
  };

  const handleOpenMenu = (): void => {
    menuView.style.display = "block";
    setTimeout(() => {
      menuView.style.transform = "translateY(150px)";
    }, 1);
  };

  const handleClick = (): void => {
    setIsDisabled(true);
    setMenu((toggle) => !toggle);
    menu ? handleExitMenu() : handleOpenMenu();
    setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  const listener = (e: Event): void => {
    if (
      !menuView.contains(e.target as Node) &&
      !menuButton.contains(e.target as Node) &&
      menu
    ) {
      setMenu(false);
      handleExitMenu();
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
