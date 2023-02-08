var storage;
function onSubmit(event){
    event.preventDefault();
    var name = document.getElementById('name').value;
    storage = {
        name : document.getElementById('name').value,
        age : document.getElementById('age').value,
        gender : document.querySelector('input[name="gender"]:checked').value,
        design : document.getElementById('design').value,
        salary : document.getElementById('salary').value,
        location: document.querySelector('#Location').value,
        email : document.getElementById('email').value,
        doj : document.getElementById('doj').value,
        contactNumber : document.getElementById('contactNumber').value,
    }
    var test = JSON.stringify(storage)
    sessionStorage.setItem(name,test);
    localStorage.setItem(name,test)
    
}

function onRetrieve(event){
    event.preventDefault();
    var data = document.getElementById('data');
    var name = document.getElementById('name').value;
    var entry = localStorage.getItem(name);
    console.log(JSON.parse(entry));
    data.innerHTML = '<div>' + entry +'</div>'
}