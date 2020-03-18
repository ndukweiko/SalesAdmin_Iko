

$(function(){
   

 
    /** Import data after click on a button */
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['msg']);

           
        });
    });

    $("#uploaddata").on('click', function(e){
        $.post("/uploadcsv", (req,res) =>{
         
            console.log("here");
           
        });
    })


    $("#getdata").on('click', function(){
        //make request to db
        $.get( "/getdata", function( data ) {
            var customers = data['data'];
            //set html of table
            $("#trdata").html('');
            var html_body = '';
            var running_total = 0;
            $.each(customers, function(ndx, customer){
                html_body += '<tr>'+
                '<td>'+customer['CustomerName']+
                '</td><td>'+customer['ItemDescription']
                +'</td><td>'+customer['ItemPrice']
                +'</td><td>'+customer['Quantity']
                +'</td><td>'+customer['MerchantName']
                +'</td><td>'+customer['MerchantAddress']
                +'</td></tr>';
                running_total += parseInt(customer['Quantity']) * parseFloat(customer['ItemPrice']);



            })
            
            //set html of table to string that was populated with the results of the request
            $("#trdata").html(html_body);
            $("#totaldata").html('<tr><td>'+ String(running_total) + '</td></tr>');
            $("#message").show().html(data['success']);

        });
    });
});