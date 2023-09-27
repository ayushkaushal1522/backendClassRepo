function refresh(){
     $('#list').empty();
    $.get("/todos",function(data){
        for(let item of data){
            $('#list').append(`<li>${item}</li>`)
        }
    })
}

refresh();

$("#btn").on('click',function(){
    let todo = $('#inp').val();
    $.post('/todos',{todo},function(data){
        console.log(data);
        $('#inp').val("");
       
       
        


    })
    refresh();
   
})


