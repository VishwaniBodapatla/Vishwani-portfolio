import React from "react";
import styles from "./CertificationCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificationCard = ({ certification }) => {
  const {
    title,
    imageSrc,
    verificationLink,
    verificationCode,
  } = certification;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={title}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.links}>
        <a
          href={verificationLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.verifyLink}
        >
          Verify Certificate
        </a>
      </div>

      <p className={styles.code}>
        Verification Code: {verificationCode}
      </p>
    </div>
  );
};