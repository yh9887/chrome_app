const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const Bgimage = document.createElement("img");
Bgimage.src = `../img/${chosenImage}`;
document.body.appendChild(Bgimage);

console.log(Bgimage)