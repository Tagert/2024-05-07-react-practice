import styles from "./styles/Header.module.css";
import logo from "../../../assets/share-with-me-logo.webp";
import x_icon from "../../../assets/x_icon.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.web_title}>
        <div className={styles.logo_box}>
          <Image alt="logo" className={styles.logo} src={logo} priority />
        </div>

        <div className={styles.title}>
          <h1>Share.tech</h1>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.nav_list}>
          <a href="./index.html">Home</a>
          <a href="./about-page/about.html">About</a>
          <a href="./add-item-page/add-item.html">Share</a>
          <div className={styles.my_basket}>
            <a id="favoritesList" href="#">
              Favorite
            </a>
          </div>
        </div>

        <div className={styles.account_manager}>
          <a id="loginWrapper" href="#">
            Log in
          </a>
          <a id="registerWrapper" href="#">
            Register
          </a>
        </div>
      </nav>

      <div className={styles.login_card}>
        <div className={styles.login_modal} id="loginModal">
          <button className={styles.loginCloseBtn}>
            <Image alt="exit icon" className={styles.x_icon} src={x_icon} />
          </button>
          <div className="active_login blur_content">
            <h4>Welcome back</h4>
            <p>Log into your Account</p>
            <div className={styles.input}>
              <div className={styles.username_box}>
                <input type="email" id="userName" placeholder="Your email" />
              </div>

              <div className={styles.username_info_error}>
                <p className={styles.username_info}></p>
              </div>
            </div>

            <div className={styles.input}>
              <div className={styles.password_box}>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>

              <div className={styles.password_info_error}>
                <p className={styles.password_info}></p>
              </div>
            </div>
          </div>

          <div className={styles.btn_info}>
            <button className={styles.loginBtn}>Login</button>
            <p className={styles.error}></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
