
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function goToProject(project_folder) {
    window.location.href = "/projects/" + project_folder;
}

function goToBlog() {
    window.location.href = "/blog";
}

function goToArticle(article_folder) {
    window.location.href = "/blog/" + article_folder;
}