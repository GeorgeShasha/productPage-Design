const productImg = document.getElementById('productImg');
const btn = document.getElementsByClassName('btn');

btn[0].addEventListener("click", function() {
    productImg.src = 'images/image-1.png';
    
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
  });

btn[1].addEventListener("click", function() {
    productImg.src = 'images/image-2.webp';

    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
  });

btn[2].addEventListener("click", function() {
    productImg.src = 'images/image-3.webp';

    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
  });


/*
btn[0].onclick = function() {
    productImg.src = 'images/image-1.png';
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}

btn[1].onclick = function() {
    productImg.src = 'images/image-2.webp';
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
    
}

btn[2].onclick = function() {
    productImg.src = 'images/image-3.webp';
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
    
}
    */

