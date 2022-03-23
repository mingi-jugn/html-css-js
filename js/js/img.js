const imges = ["aa.jpg","bb.jpg","cc.jpg"]
const chosenimg = imges[Math.floor(Math.random()*imges.length)]
const bgImg = document.createElement("img")
bgImg.src = `img/${chosenimg}`
console.log(bgImg)
document.body.appendChild(bgImg)