var password = ''

while (password != 'superadmin'){
    password = prompt('Enter password: ')
}

$('form').submit(function(event) {
    $.ajax({
        url: 'http://localhost:3000/projects',
        data: {
            teste: '32'
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