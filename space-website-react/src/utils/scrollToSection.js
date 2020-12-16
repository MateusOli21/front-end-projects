function scrollToSection(sectionId) {
  const anchor = document.querySelector(sectionId);
  anchor.scrollIntoView({ behavior: "smooth", block: "end" });
}

export default scrollToSection;
