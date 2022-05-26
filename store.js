const express = require('express');
const app = express();
const products = [  
    {"id":01 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":02 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":03 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":04 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":05 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":06 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":07 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":08 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":09 ,"productName": "" , "Price": "" , "Amount": ""  },
    {"id":10 ,"productName": "" , "Price": "" , "Amount": ""  },


];
app.get('/product', function (req, res) {
  res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
});
app.get('/products/:id', function (req, res) {
  res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
});
app.listen(3008, function () {
    console.log('Example app listening on port 3003!');
  });

  


