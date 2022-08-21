login();

function login(){
    var password = ''

    while (password != 'superadmin'){
        password = prompt('Enter password: ')
    }
    
}

$('form').submit(function(event) {
    var content = $('#content').val();
    var title = $('#title').val();
    console.log(content);
    console.log(title);
    $.ajax({
        url: 'http://localhost:3000/projects',
        data: {
            project:{
                title: title,
                content: content
            }
        },
        type: 'POST',
        dataType: 'json',
        success: function(data){
            console.log(data);
        },
        error: function(data){
            console.log(data);
        }
    })

    event.preventDefault();
})