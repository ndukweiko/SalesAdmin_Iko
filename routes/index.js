var express = require('express');
var router = express.Router();

var csv = require("fast-csv");
const path = require('path'); 
var fs = require("fs");
var mongoose = require("mongoose");
var multer = require('multer');
var csv_contents = __dirname + "/../public/files/salesdata.csv";
var correct_path = __dirname + "/../public/files/";
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, correct_path);
  },

  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
      //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      cb(null, "salesdata.csv");
  }
});
const upload = multer({storage})
var customer = mongoose.model("Customers");







/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Import CSV file and save to database' });
}).get('/import', function(req, res, next) {

var filestream = fs.createReadStream(csv_contents);

var csvStream = csv.parse({skipRows:1});

        csvStream.on("data", function(data){
         
         var item = new customer({
              CustomerName: data[0],
              ItemDescription: data[1],
              ItemPrice: data[2],
              Quantity: data[3],
              MerchantName:data[4],
              MerchantAddress:data[5]
         });
         
          item.save(function(error){
       
              if(error){
                   
                   //Don't throw error -- just block them from violating the key constraint and continue
              }
          }); 
    }).on("end", function(){
          console.log("Import successful")
    });
  
    filestream.pipe(csvStream);
    res.json({msg : "Data imported successfully.", status : 200});
     
  }).get('/getdata', function(req, res, next){
    customer.find({}, function(err, docs){
      if(!err){
        res.json({success:"data retrieved successfully", status:200, data:docs})
      }
      else{
        throw err;
      }

    })

  }).post('/uploadcsv', upload.single('uploads'), function(req, res, next){
    try {
    
      

      

      res.redirect('/');
      res.sendstatus(req.file);
      
      //window.location.href = '/';
      
   
      
    

    }catch(err) {
      console.log(err);
      res.send(400);
      return;
    }
  });




module.exports = router;
