var tabLinks = document.getElementsByClassName('tab-links')

var tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}

// second time used
var sideMenu = document.getElementById('sideMenu')
function openMenu(){
    sideMenu.style.right = "0";  
}
function closeMenu(){
    sideMenu.style.right = "-200px";  
}