import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [showEmail, setShowEmail] = useState(false);

  const email = "vishwanibodapatla07@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section className={styles.container}>
      {/* Image */}
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishwani</h1>

        <p className={styles.description}>
          AI/ML Engineer specializing in Machine Learning, MLOps, Fraud Detection,
          Forecasting, Anomaly Detection, Recommendation Systems, Personalization,
          NLP, Transformers, LLMs, RAG, LangChain/LangGraph, and scalable data
          platforms built with PySpark, Kafka, Airflow, and AWS SageMaker.
        </p>

        {/* Social Icons */}
        <div className={styles.socials}>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vishwani-bodapatla-a92a221a9/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/VishwaniBodapatla"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          {/* Email (opens popup) */}
          <button
            className={styles.iconBtn}
            aria-label="Email"
            onClick={() => setShowEmail(true)}
          >
            <FaEnvelope size={22} />
          </button>
        </div>
      </div>

      {/* Email Popup */}
      {showEmail && (
        <div className={styles.emailPopup}>
          <div className={styles.emailBox}>
            <span className={styles.emailText}>{email}</span>

            <div className={styles.emailActions}>
              <button className={styles.copyBtn} onClick={handleCopyEmail}>
                Copy
              </button>

              <button
                className={styles.closeBtn}
                onClick={() => setShowEmail(false)}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blurs */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};