import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skillImageContainer}>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
          </div>
        ))}
      </div>
    </section>
  );
};
