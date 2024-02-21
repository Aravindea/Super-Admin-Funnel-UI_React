import { FunctionComponent, useEffect } from "react";
import styles from "./SuperAdminFunnelPage1.module.css";

const SuperAdminFunnelPage1: FunctionComponent = () => {
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
    <div className={styles.superAdminFunnelPage2}>
      <div className={styles.superAdminFunnelDiv}>
        <b className={styles.superAdminFunnel}>Super Admin Funnel</b>
        <div className={styles.funnelContent}>
          <div className={styles.funnel}>
            <div className={styles.totalCandidateLeads} data-animate-on-scroll>
              <img
                className={styles.totalCandidateLeadsFunnelB}
                alt=""
                src="/total-candidate-leads-funnel-bar1.svg"
              />
              <div className={styles.totalCandidateLeadsDataTex}>
                <div className={styles.qualifiedCandidates}>
                  Total Candidate Leads
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div
              className={styles.qualifiedCandidatesLeads}
              data-animate-on-scroll
            >
              <img
                className={styles.qualifiedCandidatesLeadsFun}
                alt=""
                src="/qualified-candidates-leads-funnel-bar.svg"
              />
              <div className={styles.qualifiedCandidatesLeadsDat}>
                <div className={styles.qualifiedCandidates}>
                  Qualified Candidates
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.registered} data-animate-on-scroll>
              <img
                className={styles.registeredBarIcon}
                alt=""
                src="/registered-bar.svg"
              />
              <div className={styles.registeredDataText}>
                <div className={styles.qualifiedCandidates}>Registered</div>
                <div className={styles.div}>00</div>
              </div>
            </div>
          </div>
          <div className={styles.dataLabels} data-animate-on-scroll>
            <div className={styles.labelsColor}>
              <div className={styles.totalCandidateLeads2} />
              <div className={styles.qualifiedCandidates1} />
              <div className={styles.registered2} />
            </div>
            <div className={styles.labelsNames}>
              <div className={styles.totalCandidateLeads3}>
                Total Candidate Leads
              </div>
              <div className={styles.qualifiedCandidates2}>
                Qualified Candidates
              </div>
              <div className={styles.registered3}>Registered</div>
            </div>
            <div className={styles.labelData}>
              <b className={styles.b}>00</b>
              <b className={styles.b1}>00</b>
              <b className={styles.b}>00</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminFunnelPage1;
