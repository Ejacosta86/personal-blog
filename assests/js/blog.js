const themeSwitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
let mode = 'light'

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
      mode = 'dark';
      container.setAttribute('class', 'light');
    } else {
      mode = 'light';
      container.setAttribute('class', 'dark');
    }
  });
  
  themeSwitcher.addEventListener('click', function() {
    
  })

 
function displayBlogPosts() {
  
  const blogPost = document.getElementById("blogPost");
  

  const blogList = JSON.parse(localStorage.getItem("blogList"));
  
  blogList.forEach(element => {
    const child = document.createElement("div")
    const title = document.createElement("h1")
    const userName = document.createElement("h5")
    const content = document.createElement("p")

    title.innerHTML = element.title
    userName.innerHTML = element.userName
    content.innerHTML = element.content

    child.appendChild(title)
    child.appendChild(userName)
    child.appendChild(content)

    blogPost.appendChild(child)

  });

}
displayBlogPosts();