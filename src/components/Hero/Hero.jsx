import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Image on the left */}
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      {/* Content on the right */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishwani</h1>
        <p className={styles.description}>
          AI/ML Engineer specializing in Machine Learning, MLOps, Recommendation Systems, Personalization, Forecasting, Anomaly Detection, NLP, Transformers, LLMs, RAG, LangChain/LangGraph, and scalable data platforms built with PySpark, Kafka, Airflow, and AWS SageMaker.
        </p>
        <a href="mailto:vishwani@worksemail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      {/* Blurred background elements */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
