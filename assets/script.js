$(document).ready(function(){

    var city = "Toronto";

    $.ajax({
        url: "http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&appid=018e746735d1faa95dc55c31808b0de6",
        type: "get",
        success: function(latLongRes){

            $.ajax({
                


                url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + latLongRes[0].lat +"&lon=" + latLongRes[0].lon + "&appid=edcbb4d43970b467a42d74563c016dbe&=79.3832",
                type: "get",
                success: function(res){
                    $.each(res.list, function(i, val){
                        console.log(val.dt_txt);
                    });
                    console.log(res);
                }, 
                error: function(){
                }
        
            })
        }
    })

   

});