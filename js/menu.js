
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function goToProject(project_folder) {
    window.location.href = "/projects/" + project_folder + "/index.html";
}