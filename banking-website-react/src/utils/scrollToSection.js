function scrollToSection(sectionId) {
  const anchor = document.querySelector(`#${sectionId}`);
  anchor.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default scrollToSection;
