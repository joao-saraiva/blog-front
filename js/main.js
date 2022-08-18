$(document).ready(function() {
    let posts = [
        {
        title: 'Tamo junto viado',
        content: 'Tamo viado viado viado viado viado viado viado viado'
        },
        {
            title: 'Tamo junto viado',
            content: 'Tamo viado viado viado viado viado viado viado viado'
            },
            {
                title: 'Tamo junto viado',
                content: 'Tamo viado viado viado viado viado viado viado viado'
                },
                {
                    title: 'Tamo junto viado',
                    content: 'Tamo viado viado viado viado viado viado viado viado'
                    },
    ]

    createPosts(posts)

});

function createPosts(posts){
    posts.forEach(function(post){ 
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

    thumbnail.append('<img src="https://www.markuptag.com/images/image-two.jpg" class="img-fluid" alt="thumbnail">')

    my3.append('<div class="card-body"></div>')
    let cardBody = $('.card-body').last();

    cardBody.append('<h3 class="card-title text-secondary">' + title + '</h3>')
    cardBody.append('<p class="card-text">' + content.substring(0, 100) + '...</p>')
    cardBody.append('<a href="#" class="btn btn-danger">Read More</a>')
}