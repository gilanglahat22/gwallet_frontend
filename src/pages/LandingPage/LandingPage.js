import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/base/Button";
import styles from "./LandingPage.module.css";
import bnmo from "../../assets/img/BNMO.png";
import partner1 from "../../assets/img/partners/microsoft.svg";
import partner2 from "../../assets/img/partners/dropbox.svg";
import partner3 from "../../assets/img/partners/gucci.svg";
import partner4 from "../../assets/img/partners/apple.svg";
import partner5 from "../../assets/img/partners/amazon.svg";
import partner6 from "../../assets/img/partners/google.svg";
import { FaLock, FaUserFriends } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import featureImage from "../../assets/img/BNMO.png";

export const LandingPage = () => {
  const navigate = useNavigate();
  const [navShadow, setNavShadow] = useState(false);
  const changeNavShadow = () => {
    if (window.scrollY >= 80) {
      setNavShadow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavShadow);
  }, []);

  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to={"/apps"} />;
  }
  return (
    <>
      <main className={`${styles.main} container-fluid g-0`}>
        <nav
          className={
            navShadow
              ? `${styles.navbar} ${styles.navbarShadow} row g-0 d-flex flex-row justify-content-between align-items-center`
              : `${styles.navbar} row g-0 d-flex flex-row justify-content-between align-items-center`
          }
        >
          <h2
            onClick={() => navigate("/")}
            className={`${styles.Gwallet} col-12 col-lg-6 text-bold`}
          >
            Gwallet
          </h2>
          <div
            className={`${styles.navbarBtnWrapper} col-lg-6 d-flex flex-row `}
          >
            <Button
              onClick={() => navigate("/auth/login")}
              className={`${styles.navbarBtn} ${styles.login} d-none d-lg-block`}
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/auth/signup")}
              className={`${styles.navbarBtn} ${styles.signup} d-none d-lg-block`}
            >
              Sign Up
            </Button>
          </div>
        </nav>

        <section className={`${styles.heroSection} row g-0 d-flex flex-row`}>
          <div
            className={`${styles.left} col-lg-5 d-lg-flex justify-content-end d-none d-lg-block`}
          >
            <div className={`${styles.bnmoWrapper} d-none d-lg-block`}>
              <img src={bnmo} alt="bnmo" width={480} height={580} />
            </div>
          </div>

          <div className={`${styles.right} col-12 col-lg-7 d-flex flex-column`}>
            <h1 className={styles.heroTitleSm}>
              Awesome Platform <br /> For Saving{" "}
              <span className={styles.time}>Time.</span>
            </h1>
            <p className={styles.heroDesc}>
              We bring you a website app for banking problems that oftenly
              wasting much of your times.
            </p>

            <div className={styles.heroBtnWrapper}>
              <Button
                onClick={() => navigate("/auth/signup")}
                className={`${styles.heroBtn} text-white`}
              >
                Try It Free
              </Button>
            </div>
          </div>
        </section>

        <section className={styles.partnerSection}>
          <div
            className={`${styles.partnersWrapper} d-flex flex-row justify-content-between align-items-center`}
          >
            <img
              className={styles.partnerImage}
              src={partner1}
              alt="Partners"
            />
            <img
              className={styles.partnerImage}
              src={partner2}
              alt="Partners"
            />
            <img
              className={styles.partnerImage}
              src={partner3}
              alt="Partners"
            />
            <img
              className={styles.partnerImage}
              src={partner4}
              alt="Partners"
            />
            <img
              className={styles.partnerImage}
              src={partner5}
              alt="Partners"
            />
            <img
              className={styles.partnerImage}
              src={partner6}
              alt="Partners"
            />
          </div>
        </section>

        <section
          className={`${styles.aboutAppSection} d-flex flex-column align-items-center justify-content-center text-center`}
        >
          <h1 className={styles.aboutAppTitle}>
            <span className={styles.time}>About</span> the Application.
          </h1>
          <p className={styles.aboutAppDescription}>
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>

          <div className={`${styles.aboutAppCardsWrapper}`}>
            <div
              className={`${styles.aboutAppCard} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={styles.iconCardWrapper}>
                <FaUserFriends className={styles.aboutIcon} />
              </div>
              <h3 className={styles.aboutAppCardTitle}>Users Friendly</h3>
              <p className={styles.aboutAppCardDescription}>
                Gwallet come up with a modern <br />
                and sleek design and also
                <br />
                great features that easy to use.
              </p>
            </div>
            <div
              className={`${styles.aboutAppCard} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={styles.iconCardWrapper}>
                <FaLock className={styles.aboutIcon} />
              </div>
              <h3 className={styles.aboutAppCardTitle}>Data Privacy</h3>
              <p className={styles.aboutAppCardDescription}>
                We make sure your data is safe <br /> and we will encrypt any{" "}
                <br /> data you submitted to us.
              </p>
            </div>
            <div
              className={`${styles.aboutAppCard} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={styles.iconCardWrapper}>
                <MdMoneyOff className={styles.aboutIcon} />
              </div>
              <h3 className={styles.aboutAppCardTitle}>No Admin Fee</h3>
              <p className={styles.aboutAppCardDescription}>
                Gwallet is 100% free to use and <br /> free Admin Fee for
                transfer <br /> or top up your Gwallet Balance.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.featuresSection} row g-0 d-flex flex-row`}
        >
          <div
            className={`${styles.left} d-none col-lg-5 d-lg-flex justify-content-end`}
          >
            <div className={`${styles.bnmoWrapper} d-none d-lg-block`}>
              <img
                src={featureImage}
                alt="featureImage"
                width={400}
                height={580}
              />
            </div>
          </div>

          <div
            className={`${styles.right} col-12 col-lg-7  d-lg-flex flex-column`}
          >
            <h1 className={styles.featureTitle}>
              All The <span className={styles.time}>Great</span> <br />
              Gwallet Features.
            </h1>
            <div className={styles.featuresCard}>
              <p className={styles.featureName}>
                <span className={styles.time}>1.</span> Transfer
              </p>
              <p className={styles.featureDescription}>
                Transfer to your friends by phone number 0% Free Admin Fee.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <p className={styles.featureName}>
                <span className={styles.time}>2.</span> Top Up
              </p>
              <p className={styles.featureDescription}>
                Top Up your Gwallet Balance via Bank, ATM, or other methods.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <p className={styles.featureName}>
                <span className={styles.time}>3.</span> PIN Security
              </p>
              <p className={styles.featureDescription}>
                Secure your account and transaction with customize 6 digits PIN.
              </p>
            </div>
          </div>
        </section>

        <footer className={`${styles.footer} d-flex flex-column text-white`}>
          <div className={styles.footerContent}>
            <h2>Gwallet</h2>
            <p>
              Simplify financial needs and saving <br /> much time in banking
              needs with <br /> one single app.
            </p>
          </div>

          <div
            className={`${styles.copyright} d-flex flex-row justify-content-between `}
          >
            <p className="mt-3">2022 Gwallet. All right reserved.</p>

            <div className={`${styles.contact} d-flex flex-row mt-3`}>
              <p className="ms-4">+62 823 8221 1182</p>
              <p className="ms-4">13520137@std.stei.itb.ac.id</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};
