import React from "react";
import styles from "./Certifications.module.css";

import certificationsData from "../../data/Certifications.json";
import { CertificationCard } from "./CertificationCard";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>

      <div className={styles.certifications}>
        {certificationsData.map((certification, id) => (
          <CertificationCard
            key={id}
            certification={certification}
          />
        ))}
      </div>
    </section>
  );
};