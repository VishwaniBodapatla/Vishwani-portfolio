import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AI_ML.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Engineering</h3>
              <p>
                Design and develop end-to-end machine learning solutions using supervised and 
                unsupervised learning for classification, regression, recommendation systems, 
                personalization, forecasting, anomaly detection, and predictive analytics on large-scale datasets. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mlops.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>MLOps & Data Engineering</h3>
              <p>
                Build scalable ML platforms and production pipelines using PySpark, Apache Spark, Kafka, 
                Airflow, AWS SageMaker, MLflow, Docker, Kubernetes, FastAPI, and CI/CD, 
                enabling reliable model deployment, monitoring, and automation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Nlp.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Deep Learning & NLP</h3>
              <p>
                Develop deep learning and NLP solutions using Transformers, BERT, GPT, LLaMA, CNNs, RNNs, and LSTMs 
                for semantic search, text classification, sentiment analysis, information retrieval, 
                and intelligent automation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/llm.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Generative AI & LLM Applications</h3>
              <p>
                Build LLM-powered applications leveraging LangChain, LangGraph, Retrieval-Augmented Generation (RAG), 
                vector databases, prompt engineering, fine-tuning, agentic workflows, and AI orchestration frameworks 
                to create scalable and context-aware AI systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
