document.getElementById("img").onclick = function() {
    let imgNumber = document.getElementById("img").value,
    champImg = document.getElementById("champImg");
    switch (imgNumber) {
        case "1": champImg.src = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Champurrado_thenewplace_sf.jpg"; break;
        case "2": champImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Champurrado.jpg/1920px-Champurrado.jpg"; break;
        case "3": champImg.src = "https://blog.amigofoods.com/wp-content/uploads/2021/01/champurrado.jpg"; break;
        default: champImg.src = "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG";
    }
}