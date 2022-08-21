$(document).ready(function() {

    $.getJSON('http://localhost:3000/posts', function (data) {
    var posts = []
        data.forEach(function(project){
            posts.push(
                {
                    title: project.title,
                    content: project.content
                }
            )
        })

        console.log(posts.size);
        createPosts(posts)
    })
});

function createPosts(posts){
    posts.forEach(function(post){ 
        console.log(post.title)
        buildPostCard(post.title, post.content)
    }
    ); 
}

function buildPostCard(title, content){
    $('.about-me').append('<div class="col-md-6 col-lg-4"></div>')
    let div = $('.col-md-6').last();

    div.append('<div class="card my-3"></div>')
    let my3 = $('.my-3').last();

    my3.append('<div class="card-thumbnail"></div>')
    let thumbnail =$('.card-thumbnail').last();

    //https://miro.medium.com/max/1400/1*9hd_8qR0CMZ8L0pVbFLjDw.png"
    //https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg
    thumbnail.append('<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" class="img-fluid" alt="thumbnail">')

    my3.append('<div class="card-body"></div>')
    let cardBody = $('.card-body').last();

    cardBody.append('<h3 class="card-title text-secondary">' + title + '</h3>')
    cardBody.append('<p class="card-text">' + content.substring(0, 100) + '...</p>')
    cardBody.append('<a href="#" class="btn btn-danger">Read More</a>')
}