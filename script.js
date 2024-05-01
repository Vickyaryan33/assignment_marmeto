//  chhose the img
        let bigImg = document.querySelector('.big-img img');
        function showImg(pic){
            bigImg.src = pic;
        }

        //  choose the color
        document.addEventListener("DOMContentLoaded", function() {
            const colorOptions = document.querySelectorAll(".color-option");
          
            colorOptions.forEach(option => {
              option.addEventListener("click", function() {
                // Remove selected class from all options
                colorOptions.forEach(opt => {
                  opt.classList.remove("selected");
                });
          
                // Add selected class to the clicked option
                this.classList.add("selected");
          
                // Get the selected color
                const selectedColor = this.getAttribute("data-color");
                console.log("Selected color:", selectedColor);
              });
            });
          });

        //    increment button


          function increaseValue() {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('number').value = value;
          }
          
          function decreaseValue() {
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value < 1 ? value = 1 : '';
            value--;
            document.getElementById('number').value = value;
          }


        //    add to cart
        document.addEventListener("DOMContentLoaded", function() {
            // Find the Add to Cart button
            var addToCartBtn = document.getElementById("addToCartBtn");
        
            // Add click event listener
            addToCartBtn.addEventListener("click", function() {
                // Perform actions when the button is clicked
                addToCart();
            });
        
            // Function to add item to cart
            function addToCart() {
                // Your logic to add the item to the cart goes here
                console.log("Item added to cart!");
                // You can replace the console.log statement with your actual logic to add the item to the cart
            }
        });
   
