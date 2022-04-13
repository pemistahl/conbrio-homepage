const altPicture = document.getElementById("cb-picture-alt");
const sopranPicture = document.getElementById("cb-picture-sopran");
const chorleitungPicture = document.getElementById("cb-picture-chorleitung");
const plakatPicture = document.getElementById("cb-picture-plakat");
const chorPicture = document.getElementById("cb-picture-chor");
const maennerPicture = document.getElementById("cb-picture-maenner");

function placeholderImgSrc(width, height) {
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
}

function setImagePlaceholder(picture, width, height) {
  const children = picture.children;
  const placeholder = placeholderImgSrc(width, height);
  children.item(0).srcset = placeholder;
  children.item(1).srcset = placeholder;
  children.item(2).src = placeholder;
}

setImagePlaceholder(altPicture, 1.102, 1);
setImagePlaceholder(sopranPicture, 1.009, 1);
setImagePlaceholder(chorleitungPicture, 1, 1.5);
setImagePlaceholder(plakatPicture, 1, 1.414);
setImagePlaceholder(chorPicture, 1.5, 1);
setImagePlaceholder(maennerPicture, 1.156, 1);
