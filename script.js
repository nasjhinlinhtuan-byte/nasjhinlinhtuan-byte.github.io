function openCert(certId) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certImage");

  if(certId === "cert1") img.src = "Image/Certifications/ANSSI.png";
  if(certId === "certA") img.src = "Image/Certifications/RGPDM1.png";
  if(certId === "certB") img.src = "Image/Certifications/RGPDM2.png";
  if(certId === "certC") img.src = "Image/Certifications/RGPDM3.png";
  if(certId === "certD") img.src = "Image/Certifications/RGPDM4.png";
  if(certId === "certE") img.src = "Image/Certifications/RGPDM5.png";
  if(certId === "cert3") img.src = "images/certifications/cyber.png";
  if(certId === "cert4") img.src = "images/certifications/cyber.png";

  modal.style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}
