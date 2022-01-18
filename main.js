var app = new Vue({   //creating a vue instance

    el: '#app',   // this is going to connect to the div up here
    data:{

        Product:'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: false,
        details: ["80% coton","20% plyester", "gender-neutral"],
        
        variants:[
               { variantId: 2234,
                 variantColor: "green",
                 variantImage: "./assets/vmSocks-green-onWhite.jpg"     
                
                },
                
                { variantId: 2235,
                  variantColor: "blue",
                  variantImage: "./assets/vmSocks-blue-onWhite.jpg"}],
        cart:0
       },

       methods: {

        addToCart()
        {

            this.cart +=1;
        
        },

        updateProduct(variantImage)
        { 
            this.image = variantImage;

        }
    }


});