

var dog_name_array = [];
var dog_name_count=0;
var dog_breed_array = [];
var dog_age_array = [];
var dog_image_array = [];
var dog_no_display=0;
var user_id=0;

$("#signinButton").click(function(){

var login_id= document.getElementById("email").value;
var password= document.getElementById("password2").value;
console.log(login_id);
console.log(password);
var login_data = JSON.stringify({ "user" : { "name" : String(login_id) , "password" : String(password) } });


var xhReq  = new XMLHttpRequest();
xhReq.open("POST", 'https://assignment-task.herokuapp.com/login.json', false);
xhReq.setRequestHeader("Content-type", "application/json");
xhReq.send(login_data);
var dog_json = JSON.parse(xhReq.responseText);
user_id=dog_json.id;
console.log(user_id);
if(xhReq.status===201){
    dog_json = dog_json.dogs;
    console.log(dog_json);
    document.getElementById("username").innerText=" "+login_id;
    document.getElementById("login_page").style.display="none";
    document.getElementById("main_page").style.display="block";


    for (var key in dog_json) {
        if (dog_json.hasOwnProperty(key)) {
            dog_name_count = dog_name_array.push(dog_json[key].name);
            dog_breed_array.push(dog_json[key].breed_name);
            dog_age_array.push(dog_json[key].age);
            dog_image_array.push(dog_json[key].url)

        }
    }

}





;
            document.getElementById("dog_name_display").innerText = dog_name_array[dog_no_display];
            document.getElementById("dog_breed_display").innerText = dog_breed_array[dog_no_display];
            document.getElementById("dog_age_display").innerText = dog_age_array[dog_no_display];
            document.getElementById("dog_image_display").src = dog_image_array[dog_no_display];

});

$("#menu_your_dogs").click(function() {

    var login_id= document.getElementById("email").value;
    var password= document.getElementById("password2").value;
    console.log(login_id);
    console.log(password);
    var login_data = JSON.stringify({ "user" : { "name" : String(login_id) , "password" : String(password) } });

var xhReq  = new XMLHttpRequest();
xhReq.open("POST", 'https://assignment-task.herokuapp.com/login.json', false);
xhReq.setRequestHeader("Content-type", "application/json");
xhReq.send(login_data);
var dog_json = JSON.parse(xhReq.responseText);
user_id=dog_json.id;
console.log(user_id);
if(xhReq.status===201){
    dog_json = dog_json.dogs;
    console.log(dog_json);
    document.getElementById("login_page").style.display="none";
    document.getElementById("main_page").style.display="block";
    document.getElementById("your_dogs").style.display = "block";
    document.getElementById("breeds").style.display = "none";
    document.getElementById("all_dogs").style.display = "none";

    for (var key in dog_json) {
        if (dog_json.hasOwnProperty(key)) {
            dog_name_count = dog_name_array.push(dog_json[key].name);
            dog_breed_array.push(dog_json[key].breed_name);
            dog_age_array.push(dog_json[key].age);
            dog_image_array.push(dog_json[key].url)

        }
    }

}
;
document.getElementById("dog_name_display").innerText = dog_name_array[dog_no_display];
document.getElementById("dog_breed_display").innerText = dog_breed_array[dog_no_display];
document.getElementById("dog_age_display").innerText = dog_age_array[dog_no_display];
document.getElementById("dog_image_display").src = dog_image_array[dog_no_display];

});







$("#prev").click(function() {
    if(dog_no_display==0){
        dog_no_display=dog_name_count-1;}
    else{
        dog_no_display--;
    }
    console.log(dog_no_display);
    document.getElementById("dog_name_display").innerText = dog_name_array[dog_no_display];
    document.getElementById("dog_breed_display").innerText = dog_breed_array[dog_no_display];
    document.getElementById("dog_age_display").innerText = dog_age_array[dog_no_display];
    document.getElementById("dog_image_display").src = dog_image_array[dog_no_display];

});

$("#next").click(function() {

    if(dog_no_display==dog_name_count-1)
        dog_no_display=0;
    else{
        dog_no_display++;
    }
    console.log(dog_no_display);
    document.getElementById("dog_name_display").innerText = dog_name_array[dog_no_display];
    document.getElementById("dog_breed_display").innerText = dog_breed_array[dog_no_display];
    document.getElementById("dog_age_display").innerText = dog_age_array[dog_no_display];
    document.getElementById("dog_image_display").src = dog_image_array[dog_no_display];
});
$("#add").click(function() {
document.getElementById("add_info_dog").style.display="block";


});

// When the user clicks on <span> (x), close the modal
$("#close_modal").click(function() {
    document.getElementById("add_info_dog").style.display="none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("add_info_dog")) {
        document.getElementById("add_info_dog").style.display="none";
    }
}

$("#new_dog_submit").click(function() {

var new_dog_name= document.getElementById("add_dog_name").value;
var new_dog_age= document.getElementById("add_dog_age").value;
var new_dog_URL= document.getElementById("add_dog_url").value;
var new_dog_breed= document.getElementById("add_dog_breed").value;
var add_dog_data = JSON.stringify({ "dog" : { "name" : String(new_dog_name) , "age" : new_dog_age,
        "image_url" : String(new_dog_URL) , "user_id" : user_id, "breed_id" : new_dog_breed } });


var xhReq  = new XMLHttpRequest();
xhReq.open("POST", 'https://assignment-task.herokuapp.com/dogs.json', false);
xhReq.setRequestHeader("Content-type", "application/json");
xhReq.send(add_dog_data);
var dog_json = JSON.parse(xhReq.responseText);
if(xhReq.status===201) {

    document.getElementById("add_info_dog").style.display = "none";
}
});




var breed_dog_count=0;
var breed_dog_breed_array = [];
var breed_dog_image_array = [];
var breed_dog_no_display=0;
$("#menu_breeds_dogs").click(function() {

    var xhReq_breed = new XMLHttpRequest();
    xhReq_breed.open("GET", 'https://assignment-task.herokuapp.com/breeds.json', false);
    xhReq_breed.send();
    var breed_dog_json = JSON.parse(xhReq_breed.responseText);
    if(xhReq_breed.status===200) {
        for (var key in breed_dog_json) {
            if (breed_dog_json.hasOwnProperty(key)) {
                breed_dog_count = breed_dog_breed_array.push(breed_dog_json[key].name);
                breed_dog_image_array.push(breed_dog_json[key].url)

            }
        }
        document.getElementById("breed_dog_breed_display").innerText = breed_dog_breed_array[0];
        // document.getElementById("breed_dog_image_display").src = breed_dog_image_array[0];


        console.log(breed_dog_json);
        console.log("---------------------");

        document.getElementById("your_dogs").style.display = "none";
        document.getElementById("all_dogs").style.display = "none";
        document.getElementById("breeds").style.display = "block";
    }

});
$("#breed_prev").click(function() {
    if(breed_dog_no_display==0){
        breed_dog_no_display=breed_dog_count-1;}
    else{
        breed_dog_no_display--;
    }
    console.log(breed_dog_no_display);
    document.getElementById("breed_dog_breed_display").innerText = breed_dog_breed_array[breed_dog_no_display];
    // document.getElementById("breed_dog_image_display").src = breed_dog_image_array[breed_dog_no_display];

});

$("#breed_next").click(function() {

    if(breed_dog_no_display==breed_dog_count-1)
        breed_dog_no_display=0;
    else{
        breed_dog_no_display++;
    }
    console.log(breed_dog_no_display);
    document.getElementById("breed_dog_breed_display").innerText = breed_dog_breed_array[breed_dog_no_display];
    // document.getElementById("breed_dog_image_display").src = breed_dog_image_array[breed_dog_no_display];
});









var all_dog_count=0;
var all_dog_age_array = [];
var all_dog_name_array=[];
var all_dog_image_array = [];
var all_dog_no_display=0;
$("#menu_all_dogs").click(function() {

    var xhReq_all = new XMLHttpRequest();
    xhReq_all.open("GET", 'https://assignment-task.herokuapp.com/dogs.json', false);
    xhReq_all.send();
    var all_dog_json = JSON.parse(xhReq_all.responseText);
    if(xhReq_all.status===200) {
        for (var key in all_dog_json) {
            if (all_dog_json.hasOwnProperty(key)) {
                all_dog_count = all_dog_name_array.push(all_dog_json[key].name);
                all_dog_age_array.push(all_dog_json[key].age);
                all_dog_image_array.push(all_dog_json[key].image_url)

            }
        }
        document.getElementById("all_dog_name_display").innerText = all_dog_name_array[0];
        document.getElementById("all_dog_age_display").innerText = all_dog_age_array[0];
        document.getElementById("all_dog_image_display").src = all_dog_image_array[0];


        console.log(all_dog_json);
        console.log("---------------------");

        document.getElementById("your_dogs").style.display = "none";
        document.getElementById("breeds").style.display = "none";
        document.getElementById("all_dogs").style.display = "block";
    }

});
$("#all_prev").click(function() {
    if(all_dog_no_display==0){
        all_dog_no_display=all_dog_count-1;}
    else{
        all_dog_no_display--;
    }
    console.log(all_dog_no_display);
    document.getElementById("all_dog_name_display").innerText = all_dog_name_array[all_dog_no_display];
    document.getElementById("all_dog_age_display").innerText = all_dog_age_array[all_dog_no_display];
    document.getElementById("all_dog_image_display").src = all_dog_image_array[all_dog_no_display];

});

$("#all_next").click(function() {

    if(all_dog_no_display==all_dog_count-1)
        all_dog_no_display=0;
    else{
        all_dog_no_display++;
    }
    console.log(all_dog_no_display);
    document.getElementById("all_dog_name_display").innerText = all_dog_name_array[all_dog_no_display];
    document.getElementById("all_dog_age_display").innerText = all_dog_age_array[all_dog_no_display];
    document.getElementById("all_dog_image_display").src = all_dog_image_array[all_dog_no_display];
});

$("#logout").click(function() {
    document.getElementById("login_page").style.display = "block";
    document.getElementById("main_page").style.display = "none";
});

