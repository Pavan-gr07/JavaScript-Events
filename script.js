var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }
  
  const lists = document.getElementById("lists");
    const outputImg = document.getElementById("outputimg");
    const heading = document.getElementById("heading");
  
    
    outputImg.setAttribute("src", productData.photos[0]);
  
  
     var detailsDiv =document.createElement('div');
    detailsDiv.className = ' details';
    var h1 = document.createElement('h1');
    var h3a = document.createElement('h3');
    var h3b = document.createElement('h3');
    var h3c = document.createElement('h3');
    var h3d= document.createElement('h3');
    var h4 = document.createElement('h4');
  
    h1.innerHTML = productData.name;
    h3a.innerHTML = productData.brand;
    h3b.innerHTML = "Price: Rs "+productData.brand;
    h3c.innerHTML = "Description";
    h4.innerHTML = productData.description;
    h3d.innerHTML = "Product Preview";
  
    heading.append(h1);
    heading.append(h3a);
    heading.append(h3b);
    heading.append(h3c);
    heading.append(h4);
    heading.append(h3d);
  
    main.append(detailsDiv)
    
  
    let output = " ";
    // let pics = productData.photos;
  
    // for (let i = 0; i < pics.length; i++) {
    //   if (i === 0) {
    //     output += `<div class="list active">
    //       <img src= ${pics[i]}>
    //       </div>`;
    //   } else {
    //     output += `<div class="list">
    //       <img src= ${pics[i]} click(changeImage(${pics[i]}))>
    //       </div>`;
    //   }
    // }
  
    // lists.innerHTML = output;
  
    // lists.addEventListener("click", (e) => {
    //   let targetSRC = e.target.getAttribute("src");
    //   // console.log(target.getAttribute('src'))
    //   outputimg.setAttribute("src", targetSRC);
    // });

    let pics = productData.photos;
    for (let i = 0; i < pics.length; i++) {
  
      const imgE1 = document.createElement('img');
      imgE1.classList.add('item');
      imgE1.setAttribute('src',pics[i]);
      
      if (i === 0) {
        imgE1.classList.add('active');
      } 
  
      imgE1.addEventListener('click',(e) =>
      {
        let targetSRC =e.target.getAttribute('src');
        outputImg.setAttribute('src',targetSRC);
  
        let activeImg = document.querySelector('img.active');
        activeImg.classList.remove('active');
        e.target.classList.add('active')
      })
  
      lists.appendChild(imgE1);
    }
