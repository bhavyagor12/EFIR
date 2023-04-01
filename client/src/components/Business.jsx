import styles, { layout } from "./style";
import star from "../images/star.svg";
import shield from "../images/shield.svg";
import send from "../images/send.svg";
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "100% Paperless",
    content:
      "No need to store FIRs in physical form, we have replaced the traditional way to store FIRS.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secure",
    content:
      "Unleashing the power of Blockchain and Smart contracts, data is full proof and consistent.",
  },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Filing of FIRS, <br className="sm:block hidden" /> made simple and easy
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        No need to worry about storing FIRs, we have replaced the traditional
        way to write FIRS with a digital way to file FIRS.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
