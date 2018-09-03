// Get the modal

    var locationModal = document.getElementById('locationModal');
    var aboutModal = document.getElementById('aboutModal');

    // Get the button that opens the modal
    var locationBtn = document.getElementById('locationBtn');
    var aboutBtn = document.getElementById('aboutBtn');

    // When the user clicks the button, open the modal 
    locationBtn.onclick = function() {
        locationModal.style.display = "block";
    }

    aboutBtn.onclick = function() {
        aboutModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == locationModal){
            locationModal.style.display = "none";
        }
        if (event.target == aboutModal){
            aboutModal.style.display = "none";
        }
    }



function showGrop(){
    document.getElementById('indivform').style.display ='none';
    document.getElementById('groupform').style.display = 'block';

    document.getElementById('indivform').value = false;
    document.getElementById('groupform').value = true;
  }
  function showIndiv(){
    document.getElementById('groupform').style.display ='none';
    document.getElementById('indivform').style.display = 'block';

    document.getElementById('indivform').value = true;
    document.getElementById('groupform').value = false;
  }

function save() {

    var body = JSON.stringify({
        group : document.getElementById('group').value,
        individual: document.getElementById('indiv').value,
        firstname: "Annaaaaaaaaaaaa",
        middlename: "Ivanovna",
        surname: "Lolman",
        status: "teacher",
        school: null,
        grade: null,
        city: null
    });
    
    var req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
    }
    };

    req.open("POST", "https://api.jsonbin.io/b/5b8ab16edb948c68635b006c/new", true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(body);
}