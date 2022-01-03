var app = new Vue({   //creating a vue instance

    el: '#app',   // this is going to connect to the div up here
    data:{

        Product:'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: false,
        details: ["80% coton","20% plyester", "gender-neutral"]
    }

});