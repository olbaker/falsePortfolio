
function revealProjects() {
    document.getElementById('hidden-div').style.display = 'block';
    document.getElementById('button').style.display = 'none';
    document.getElementById('button-2').style.display = 'block';
};

function hideProjects() {
    document.getElementById('hidden-div').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    document.getElementById('button-2').style.display = 'none';
}

document.getElementById('button').onclick = revealProjects;
document.getElementById('button-2').onclick = hideProjects;