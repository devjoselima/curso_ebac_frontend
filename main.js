const url = 'https://api.github.com/users/devjoselima';
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const username = document.getElementById('profile-username');
const rep = document.getElementById('repositories');
const follows = document.getElementById('followers');
const following = document.getElementById('following');
const link = document.getElementById('link');

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        profileImage.src = json.avatar_url;
        profileName.innerText = json.name;
        username.innerText = json.login;
        rep.innerText = json.public_repos;
        follows.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
    