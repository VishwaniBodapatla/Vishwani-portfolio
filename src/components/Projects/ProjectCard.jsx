import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      {/* <p className={styles.description}>{description}</p> */}

      {/* Single box with all skills */}
      <div className={styles.skills}>
        {skills.join(", ")}
      </div>

      {/* GitHub icon link */}
      <div className={styles.links}>
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <FaGithub size={24} />
          </a>
        )}
      </div>
    </div>
  );
};
