var productData =[{
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
  }]


  var mainSection = document.getElementById('main');

for(let i=0;i<productData.length;i++)
{

  var containerDiv = document.createElement('div');
  containerDiv.className = 'conatainer1';


  var previewDiv = document.createElement('div');
  previewDiv.className = "preview";
  var previewimg = document.createElement('img');
  previewimg.className = "previewImg"
  previewimg.src = productData[i].preview;
  previewDiv.append(previewimg);

  var detailsDiv = document.createElement('div');
  detailsDiv.className = ' details';
  var h1 = document.createElement('h1');
  var h3a = document.createElement('h3');
  var h3b = document.createElement('h3');
  var h3c = document.createElement('h3');
  var h3d= document.createElement('h3');
  
  var h4 = document.createElement('h4');
  h1.innerHTML = productData[i].name;
  h3a.innerHTML = productData[i].brand;
  h3b.innerHTML = "Price: Rs "+productData[i].brand;
  h3c.innerHTML = "Description";
  h4.innerHTML = productData[i].description;
  h3d.innerHTML = "Product Preview";


  var imagesdiv = document.createElement('div');
  imagesdiv.className = 'images';
  var img = document.createElement('img');
  var img = document.createElement('img');
  var img = document.createElement('img');
  var img = document.createElement('img');
  var img = document.createElement('img');
  // for(let i=0;i<photos.length;i++)
  // {
  //   img.innerHTML = photos[i];
  // }
  imagesdiv.append(img);

  var addcartdiv = document.createElement('div');
  addcartdiv.className = 'addcart';
  var anchor = document.createElement('a');
  anchor.href= "#";
  anchor.innerHTML = "ADD Cart";
  addcartdiv.append(anchor);
  detailsDiv.append(addcartdiv);
  

  detailsDiv.append(h1);
  detailsDiv.append(h3a);
  detailsDiv.append(h3b);
  detailsDiv.append(h3c);
  detailsDiv.append(h4);
  detailsDiv.append(h3d);


  containerDiv.append(previewDiv);
  containerDiv.append(detailsDiv);
  containerDiv.append(addcartdiv);



  mainSection.append(containerDiv);
  
}

