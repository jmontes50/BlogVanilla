let cargarPost = () => {
    let peticion = new Network();
    let postcontainer = document.getElementById("postcontainer");
    peticion.getPosts().then(posts => {
        console.log(posts);

        let post = `<div class="post-preview">
        <a href="post.html">
          <h2 class="post-title">
            Man must explore, and this is exploration at its greatest
          </h2>
          <h3 class="post-subtitle">
            Problems look mighty small from 150 miles up
          </h3>
        </a>
        <p class="post-meta">Posted by
          <a href="#">Start Bootstrap</a>
          on September 24, 2019</p>
      </div>
      <hr>`
        let postsHtml = "";
      posts.forEach((post)=> {
          
          let texto = JSON.parse(post.post_texto);
          console.log("texto",texto)
          
        let codePost = `<div class="post-preview">
                            <a href="post.html">
                            <h2 class="post-title">
                                ${post.post_titulo}
                            </h2>
                            <h3 class="post-subtitle">
                                ${post.post_texto}
                            </h3>
                            </a>
                            <p class="post-meta">Posted by
                            <a href="#">${post.post_autor}</a>
                            </p>
                        </div>
                        <hr>`
        postsHtml = postsHtml + codePost;
      })
      postcontainer.innerHTML = postsHtml;
    })
}

cargarPost();
