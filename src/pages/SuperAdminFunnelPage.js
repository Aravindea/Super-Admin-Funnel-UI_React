import { useEffect } from "react";
import styles from "./SuperAdminFunnelPage.module.css";

const SuperAdminFunnelPage = () => {
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
    <div className={styles.superAdminFunnelPage}>
      <div className={styles.superAdminFunnelDiv}>
        <b className={styles.superAdminFunnel}>Super Admin Funnel</b>
        <div className={styles.funnelContent}>
          <div className={styles.funnel}>
            <div className={styles.totalCandidateLeads} data-animate-on-scroll>
              <img
                className={styles.totalCandidateLeadsFunnelB}
                alt=""
                src="/total-candidate-leads-funnel-bar.svg"
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
                className={styles.qualifiedCandidatesLeadFunn}
                alt=""
                src="/qualified-candidates-lead-funnel-bar.svg"
              />
              <div className={styles.qualifiedCandidateLeadsData}>
                <div className={styles.qualifiedCandidates}>
                  Qualified Candidates
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.registered} data-animate-on-scroll>
              <img
                className={styles.registeredFunnelBar}
                alt=""
                src="/registered-funnel-bar.svg"
              />
              <div className={styles.registeredDataText}>
                <div className={styles.qualifiedCandidates}>Registered</div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.interviewScheduled} data-animate-on-scroll>
              <img
                className={styles.interviewScheduledFunnelBar}
                alt=""
                src="/interview-scheduled-funnel-bar.svg"
              />
              <div className={styles.interviewScheduledData}>
                <div className={styles.qualifiedCandidates}>
                  Interview Scheduled
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.interviewAttended} data-animate-on-scroll>
              <img
                className={styles.interviewAttendedFunnelBar}
                alt=""
                src="/interview-attended-funnel-bar.svg"
              />
              <div className={styles.interviewAttendedDataText}>
                <div className={styles.qualifiedCandidates}>
                  Interview Attended
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.companySelected} data-animate-on-scroll>
              <img
                className={styles.companySelectedFunnelBar}
                alt=""
                src="/company-selected-funnel-bar.svg"
              />
              <div className={styles.companySelectedDataText}>
                <div className={styles.qualifiedCandidates}>
                  Company Selected
                </div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.offerAccepted} data-animate-on-scroll>
              <img
                className={styles.offerAcceptedFunnelBar}
                alt=""
                src="/offer-accepted-funnel-bar.svg"
              />
              <div className={styles.offerAcceptedDataText}>
                <div className={styles.qualifiedCandidates}>Offer Accepted</div>
                <div className={styles.div}>00</div>
              </div>
            </div>
            <div className={styles.joined} data-animate-on-scroll>
              <img
                className={styles.offerAcceptedFunnelBar}
                alt=""
                src="/joined-funnel-bar.svg"
              />
              <div className={styles.offerAcceptedDataText}>
                <div className={styles.qualifiedCandidates}>Joined</div>
                <div className={styles.div}>00</div>
              </div>
            </div>
          </div>
          <div className={styles.dataLabels} data-animate-on-scroll>
            <div className={styles.labelsColor}>
              <div className={styles.totalCandidateLeads2} />
              <div className={styles.qualifiedCandidates1} />
              <div className={styles.registered2} />
              <div className={styles.interviewScheduled2} />
              <div className={styles.interviewAttended2} />
              <div className={styles.companySelected2} />
              <div className={styles.offerAccepted2} />
              <div className={styles.joined2} />
            </div>
            <div className={styles.labelsNames}>
              <div className={styles.totalCandidateLeads3}>
                Total Candidate Leads
              </div>
              <div className={styles.qualifiedCandidates2}>
                Qualified Candidates
              </div>
              <div className={styles.registered3}>Registered</div>
              <div className={styles.registered3}>Interview Scheduled</div>
              <div className={styles.registered3}>Interview Attended</div>
              <div className={styles.registered3}>Company Selected</div>
              <div className={styles.offerAccepted3}>Offer Accepted</div>
              <div className={styles.registered3}>Joined</div>
            </div>
            <div className={styles.labelData}>
              <b className={styles.b}>00</b>
              <b className={styles.b1}>00</b>
              <b className={styles.b}>00</b>
              <b className={styles.b}>00</b>
              <b className={styles.b}>00</b>
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

export default SuperAdminFunnelPage;
