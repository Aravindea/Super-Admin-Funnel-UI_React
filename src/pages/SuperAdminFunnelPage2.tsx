import { FunctionComponent, useEffect } from "react";
import styles from "./SuperAdminFunnelPage2.module.css";

const SuperAdminFunnelPage2: FunctionComponent = () => {
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
    <div className={styles.superAdminFunnelPage3}>
      <div className={styles.superAdminFunnelDiv}>
        <b className={styles.superAdminFunnel}>Super Admin Funnel</b>
        <div className={styles.funnelContent}>
          <div className={styles.funnel}>
            <div className={styles.interviewScheduled} data-animate-on-scroll>
              <img
                className={styles.interviewScheduledFunnelBar}
                alt=""
                src="/interview-scheduled-funnel-bar1.svg"
              />
              <div className={styles.interviewScheduledDataText}>
                <div className={styles.interviewScheduled1}>
                  Interview Scheduled
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.interviewAttended} data-animate-on-scroll>
              <img
                className={styles.interviewAttendedBar}
                alt=""
                src="/interview-attended-bar.svg"
              />
              <div className={styles.interviewAttendedDataText}>
                <div className={styles.interviewScheduled1}>
                  Interview Attended
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
          </div>
          <div className={styles.dataLabels} data-animate-on-scroll>
            <div className={styles.labelsColor}>
              <div className={styles.interviewScheduled2} />
              <div className={styles.interviewAttended2} />
            </div>
            <div className={styles.labelsNames}>
              <div className={styles.interviewScheduled3}>
                Interview Scheduled
              </div>
              <div className={styles.interviewAttended3}>
                Interview Attended
              </div>
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

export default SuperAdminFunnelPage2;
