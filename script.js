var tablinks =document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("act-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("act-tab");
}

// ---------- Side Menu Bar ----------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-100%";
}

// ---------- Contact Form ----------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyWYjXqlLt0NAg_0f4Io7_cWE7j0OxGDpmZiFXWm8hMORMb4k2yIeIdf0QLVZWGcjkeBQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Message Sent SuccessFully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
