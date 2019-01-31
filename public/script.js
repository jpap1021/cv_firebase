let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");

const music= document.getElementById("music"); 
const getMusic1= document.getElementById('getmusic1')
const getMusic2= document.getElementById('getmusic2')
const photo= document.getElementById("photo"); 
const getPhoto1= document.getElementById('getphoto1')
const getPhoto2= document.getElementById('getphoto2')
const desig= document.getElementById("design"); 
const getDesign1= document.getElementById('getdesign1')
const getDesign2= document.getElementById('getdesign2')
const video= document.getElementById("video"); 
const getVideo1= document.getElementById('getvideo1')
const getVideo2= document.getElementById('getvideo2')
const all= document.getElementById('all')

console.log(getResume)

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }
});

getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})
all.addEventListener('click', function(e){
    getPhoto1.classList.remove('change')
    getPhoto2.classList.remove('change')
    getDesign1.classList.remove('change')
    getDesign2.classList.remove('change')
    getVideo1.classList.remove('change')
    getVideo2.classList.remove('change')
    getMusic1.classList.remove('change')
    getMusic2.classList.remove('change')
})

music.addEventListener('click', function(e){
    getPhoto1.classList.add('change')
    getPhoto2.classList.add('change')
    getDesign1.classList.add('change')
    getDesign2.classList.add('change')
    getVideo1.classList.add('change')
    getVideo2.classList.add('change')
    getMusic1.classList.remove('change')
    getMusic2.classList.remove('change')
})
photo.addEventListener('click', function(e){
    getMusic1.classList.add('change')
    getMusic2.classList.add('change')
    getDesign1.classList.add('change')
    getDesign2.classList.add('change')
    getVideo1.classList.add('change')
    getVideo2.classList.add('change')
    getPhoto1.classList.remove('change')
    getPhoto2.classList.remove('change')
})
video.addEventListener('click', function(e){
    getMusic1.classList.add('change')
    getMusic2.classList.add('change')
    getDesign1.classList.add('change')
    getDesign2.classList.add('change')
    getPhoto1.classList.add('change')
    getPhoto2.classList.add('change')
    getVideo1.classList.remove('change')
    getVideo2.classList.remove('change')
})
design.addEventListener('click', function(e){
    getMusic1.classList.add('change')
    getMusic2.classList.add('change')
    getPhoto1.classList.add('change')
    getPhoto2.classList.add('change')
    getVideo1.classList.add('change')
    getVideo2.classList.add('change')
    getDesign1.classList.remove('change')
    getDesign2.classList.remove('change')
})
var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });