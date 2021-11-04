(function () {
"use strict";

class cardProduct {
  constructor(tooltip, color, img, title, originPrice, oldPrice, innerBlock) {
    this.tooltip = tooltip;
    this.color = color;
    this.img = img;
    this.title = title;
    this.oldPrice = oldPrice;
    this.originPrice = originPrice;
    this.innerBlock = document.querySelector(innerBlock);
    this.valuta = 85;
    this.originPrice = this.convertToUSD(this.originPrice);
    this.oldPrice = this.convertToUSD(this.oldPrice);
  }

  convertToUSD(price) {
    const result = price / this.valuta;
    return result.toFixed(1);
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("list_product");
    div.innerHTML = `
                      <div class="product">
                      <div class="img">
                          <div class="tooltip ${this.color}">
                              <span>${this.tooltip}</span>
                          </div>
                          <img src=${this.img} alt="img27">
                          <div class="desc_img1">
                              <div class="desc1">
                                  <div class="view">
                                      <span><i class="fas fa-arrows-alt"></i></span>
                                      <p>Quick view</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="body_product">
                          <p class="ttl">${this.title}</p>
                          <div>
                              <div class="block_stars">
                                  <div class="stars">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>

                                  </div>
                                  <div class="reviews">
                                      <span>6 review(s)</span>
                                  </div>
                              </div>

                              <div class="price">
                                  <span class="currency">$</span>
                                  <span class="oprice">${this.originPrice}</span>
                                  <del>$ ${this.oldPrice}</del>
                              </div>

                              <div class="btns dnone">
                                  <ul class="ul_li">
                                      <li class="add_card">
                                          <span class="seryi_krug bag_card"><i class="fas fa-briefcase"></i></span>
                                      </li>
                                      <li>
                                          <span class="seryi_krug"><i class="fas fa-balance-scale"></i></span>
                                      </li>
                                      <li>
                                          <span class="seryi_krug"><i class="fas fa-heart"></i></span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
    `;

    this.innerBlock.append(div);
  }
}

new cardProduct (
  'New Block',
  'bg_orange',
  './images/img63.jpg',
  'New Title',
  1238,
  2500,
  '.list_product'
).render();


// new cardProduct (
//   'New 2',
//   './images/img63.jpg',
//   'New Title',
//   1238,
//   2500,
//   '.list_product'
// ).render();

// new cardProduct (
//   'New 3',
//   './images/img62.jpg',
//   'New Title',
//   1238,
//   2500,
//   '.list_product'
// ).render();


// new cardProduct (
//   'New 4',
//   './images/img63.jpg',
//   'New Title',
//   1238,
//   2500,
//   '.list_product'
// ).render();


// new cardProduct (
//   'New 5',
//   './images/img63.jpg',
//   'New Title',
//   1238,
//   2500,
//   '.list_product'
// ).render();

 // JSON

 const Data = {
     name: "Ismar",
     age: 26,
     parent: {
        parent1: "Alex",
        parent2: "Rose"
     }
 };

 console.log(Data);
 // console.log(JSON.parse(JSON.stringify(Data)));

 const newObj = JSON.parse(JSON.stringify(Data));
 newObj.parent.parent1 = "Ismar";
    console.log(newObj);
    


    class Thenable {
        constructor(num) {
            this.num = num;
        }

        then(resolve, reject) {
            alert(resolve);
            // выполнить resolve со значением this.num + 2 через 1000мс
            setTimeout(() => resolve(this.num * 2), 1000); //(+)
        
    };

    async function f() {
        // код будет ждать 1 сенкунду
        // после чего значение result станет равным 2
        let result = await new Thenable(1);
        alert(result);
    }
    
    f();


}());