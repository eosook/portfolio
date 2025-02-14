export default function ProjectCardImage({ image, expanded }) {
  return (
    <img
      className={
        expanded
          ? "project-card__image project-card__image-expanded"
          : "project-card__image"
      }
      src={image}
      alt="Project Screenshot"
    />
  );
}
