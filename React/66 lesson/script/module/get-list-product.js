(function () {
    'use strict';


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
    
    const getProduct = async (url) => {

        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Ошибка fetch ${url} статус: ${result.status}`)
        }

        return await result.json();

        };
            
                
                
                
    

    getProduct("http://final.com/products")
    .then(data => {
        
        data.forEach(({title, tooltip, img, top_title, originPrice, oldPrice}) => {
                    
                    new cardProduct (
                        title,
                        tooltip,
                        img,
                        top_title,
                        originPrice,
                        oldPrice,
                        '.list_product'
                        ).render();
            });
    
    });






    

    

}());