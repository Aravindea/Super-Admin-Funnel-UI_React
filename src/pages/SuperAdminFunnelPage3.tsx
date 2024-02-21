import { FunctionComponent, useEffect } from "react";
import styles from "./SuperAdminFunnelPage3.module.css";

const SuperAdminFunnelPage3: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.superAdminFunnelPage4}>
      <div className={styles.superAdminFunnelDiv}>
        <b className={styles.superAdminFunnel}>Super Admin Funnel</b>
        <div className={styles.funnelContent}>
          <div className={styles.funnel}>
            <div className={styles.offerAccepted} data-animate-on-scroll>
              <img
                className={styles.offerAcceptedFunnelBar}
                alt=""
                src="/offer-accepted-funnel-bar1.svg"
              />
              <div className={styles.offerAcceptedDataText}>
                <div className={styles.joined}>Offer Accepted</div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.interviewAttended} data-animate-on-scroll>
              <img
                className={styles.joinedBarIcon}
                alt=""
                src="/joined-funnel-bar.svg"
              />
              <div className={styles.joinedDataText}>
                <div className={styles.joined}>Joined</div>
                <div className={styles.div}>00</div>
              </div>
            </div>
          </div>
          <div className={styles.dataLabels} data-animate-on-scroll>
            <div className={styles.labelsColor}>
              <div className={styles.offerAccepted2} />
              <div className={styles.joined1} />
            </div>
            <div className={styles.labelsNames}>
              <div className={styles.offerAccepted3}>Offer Accepted</div>
              <div className={styles.joined2}>Joined</div>
            </div>
            <div className={styles.labelData}>
              <b className={styles.b}>00</b>
              <b className={styles.b1}>00</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminFunnelPage3;
