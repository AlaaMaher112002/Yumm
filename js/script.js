$(".bar").click(function () {
    let optionsWidth = $(".color-options").outerWidth()
    if ($(".color-box").css("left") == "0px") {
        $(".color-box").animate({ "left": -optionsWidth }, 300);
        $('.list-group li').addClass('moveingDown', 200);
        $('.list-group li').removeClass('moveingUp', 200);
        $(".bar").html('<i class="fa-solid fa-bars fa-2x position-absolute top-50 start-50 translate-middle ps-2"></i>', function () {
            $(".color-box").css({ "left": 0 }, 1000);

        });


    }
    else {

        $('.list-group li').removeClass('moveingDown', 200);
        $('.list-group li').addClass('moveingUp', 200);
        $(".color-box").animate({ "left": 0 }, 300, function () {
            $(".bar").html('<i class="fa-solid fa-xmark fa-2x position-absolute top-50 start-50 translate-middle ps-2"></i>');
        });

    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////// DoM

$('#main').hide();
$('#linkSearch').click(function () {
    $('#main').show();
    $('#resipesdata').hide();
    $('#contact').hide();
    $('#catogry').hide();
})

$('#main input').keyup(
    function(){
        $('#resipesdata').show()
    }
)

$('#contact').hide();
$('#contactlink').click(function () {
    $('#contact').show();
    $('#resipesdata').hide();
    $('#main').hide();
    $('#catogry').hide();
    $('#ingridents').hide();
    $('#area').hide();

})


//////////////////////////////////////////// category
$('#linkcatogry').click(function () {
    $('#resipesdata').hide();
    $('#catogry').show();
    categories();
    $('#main').hide();
    $('#contact').hide();
    $('#ingridents').hide();
    $('#area').hide();
})



////////////////////////////////////////////// area
$('#arealink').click(function () {
    $('#area').show();
    areas();
    $('#resipesdata').hide();
    $('#main').hide();
    $('#contact').hide();
    $('#catogry').hide();
    $('#ingridents').hide();
});

////////////////////////////////////////////// ingridents
$('#ingreidentslink').click(function () {
    $('#ingridents').show();
    ingredients();
    $('#resipesdata').hide();
    $('#main').hide();
    $('#contact').hide();
    $('#catogry').hide();
    $('#area').hide();
});















///////////////////////////////////////////////////////////////////////////////////////////////////search by first letter


getRecipesByName('C');

var recipes = [];
function getRecipesByFirst(currentMeal) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${currentMeal}`);
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log(JSON.parse(httpRequest.response))
            recipes = JSON.parse(httpRequest.response).meals;
            console.log(recipes)
            displayData()
        }
    })
}


///////////////////////////////////////////////////////////////////////////////search by full name
function getRecipesByName(currentMeal) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${currentMeal}`);
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log(JSON.parse(httpRequest.response))
            recipes = JSON.parse(httpRequest.response).meals;
            console.log(recipes)
           
            displayData()
        }
    })
}



function displayData() {
    var cols = '';
    for (var i = 0; i < recipes.length; i++) {
        cols += `
        <div class="col-md-3 ">
        <div class="respiceImg">

        <img src="${recipes[i].strMealThumb}" class="w-100  ">
        <a target="_blank" href="${recipes[i].strInstructions}">
        <div class="pic-layer">
        <h3>${recipes[i].strMeal}</h3>
        </div>
        
        </a>

        </div>      
        </div>
        `
    }
    document.getElementById('resipesdata').innerHTML = cols;
}


let currentMeal;
firstInput.addEventListener("keyup", function () {
    currentMeal = firstInput.value;
    console.log(currentMeal);
    getRecipesByFirst(currentMeal);
});


nameInput.addEventListener("keyup", function () {
    currentMeal = nameInput.value;
    console.log(currentMeal);
    getRecipesByName(currentMeal);
})


linkcatogry.addEventListener("click",function(){
    categories();
})



///////////////////////////////////////////////////////////////////////////////////// Validation

var NameInput = document.getElementById('name');
var EmailInput = document.getElementById('email');
var PhoneInput = document.getElementById('phone');
var AgeInput = document.getElementById('age');
var PasswardInput = document.getElementById('password');
var RePasswardInput = document.getElementById('Repassward');
var addBtn = document.getElementById('addBtn');
var nameAlert=document.getElementById('nameAlert');


NameInput.onkeyup=function(){
    var nameRegex=/[A-z a-z \s]/;
    if(nameRegex.test(NameInput.value)){
        addBtn.removeAttribute('disabled');
        NameInput.classList.add('is-valid');
        NameInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        NameInput.classList.add('is-invalid');
        NameInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}

EmailInput.onkeyup=function(){
    var nameRegex=/^[a-z A-Z 0-9]{3-17} @[a-z]{3-9}\.[a-z]{3}$/;
    if(nameRegex.test(EmailInput.value)){
        addBtn.removeAttribute('disabled');
        EmailInput.classList.add('is-valid');
        EmailInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        EmailInput.classList.add('is-invalid');
        EmailInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}


PhoneInput.onkeyup=function(){
    var nameRegex=/^(010|011|012|015|040)[0-9]{8}$/;
    if(nameRegex.test(PhoneInput.value)){
        addBtn.removeAttribute('disabled');
        PhoneInput.classList.add('is-valid');
        PhoneInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        PhoneInput.classList.add('is-invalid');
        PhoneInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}


AgeInput.onkeyup=function(){
    var nameRegex=/^[0-9]$/;
    if(nameRegex.test(AgeInput.value)){
        addBtn.removeAttribute('disabled');
        AgeInput.classList.add('is-valid');
        AgeInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        AgeInput.classList.add('is-invalid');
        AgeInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}

PasswardInput.onkeyup=function(){
    var nameRegex=/[A-z a-z \s 0-9]/;
    if(nameRegex.test(PasswardInput.value)){
        addBtn.removeAttribute('disabled');
        PasswardInput.classList.add('is-valid');
        PasswardInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        PasswardInput.classList.add('is-invalid');
        PasswardInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}


RePasswardInput.onkeyup=function(){
    var nameRegex=/^[A-z a-z \s 0-9]$/;
    if(nameRegex.test(RePasswardInput.value)){
        if(PasswardInput.value==RePasswardInput.value){
            addBtn.removeAttribute('disabled');
            RePasswardInput.classList.add('is-valid');
            RePasswardInput.classList.remove('is-invalid');
        }
       
        nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        RePasswardInput.classList.add('is-invalid');
        RePasswardInput.classList.add('is-valid');
        nameAlert.classList.remove('d-none');
    }
}


function clearForm(){
    NameInput.value='';
    PhoneInput.value='';
    AgeInput.value='';
    PasswardInput.value='';
    EmailInput.value='';
    RePasswardInput.value='';
        }    

//////////////////////////////////////////////////////////////////////////////////////////////////loading
$(document).ready(function(){
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","visible")
    })
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////catogry

function categories() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://www.themealdb.com/api/json/v1/1/categories.php');
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log(JSON.parse(httpRequest.response))
            recipes = JSON.parse(httpRequest.response).categories;
            console.log(recipes)
            displayDataCatogry();
        }
    })
}

function displayDataCatogry() {
    var cols = '';
    for (var i = 0; i < recipes.length; i++) {
        cols += `
        <div class="col-md-3 ">
        <div class="respiceImg">
        <img src="${recipes[i].strCategoryThumb}" class="w-100  ">
        <div class="pic-layer">
        <h4>${recipes[i].strCategory}</h4>
        <div id="pCatogry" class="w-100">
        <p>${recipes[i].strCategoryDescription}</p>
        </div>
        </div>
        </div>      
        </div>
        `
    }
    document.getElementById('Categorydata').innerHTML = cols;
}


//////////////////////////////////////////////////////////////////////////////////////////////////Area

function areas() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log(JSON.parse(httpRequest.response))
            recipes = JSON.parse(httpRequest.response).meals;
            console.log('areas',recipes)
            displayDataAreas();
        }
    })
}

function displayDataAreas() {
    var cols = '';
    for (var i = 0; i < recipes.length; i++) {
        cols += `
        <div class="col-md-3" id="areaCol">
        <div class="Areabg">
        <i class="fa-solid fa-city"></i>
        <h4 class="py=3">${recipes[i].strArea}</h4>
        </div>      
        </div>
        `
    }
    document.getElementById('areadata').innerHTML = cols;
}


//////////////////////////////////////////////////////////////////////////////////////////////////Ingridients

function ingredients() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log(JSON.parse(httpRequest.response))
            recipes = JSON.parse(httpRequest.response).meals;
            console.log('ingridents',recipes)
            displayDataIngridients();
        }
    })
}
function displayDataIngridients() {
    var cols = '';
    let str;
    for (var i = 0; i < 25; i++) {         
        cols += `
        <div class="col-md-3" >
        <div class="bowel text-center text-white">
        <i class="fa-solid fa-bowl-food fa-3x"></i>
        <h5 class="py=3">${recipes[i].strIngredient}</h5>
        <div id="fix-p" class="w-100">
        <p>${recipes[i].strDescription}</p>
        </div>
        </div>      
        </div>    
        `
    }
    document.getElementById('ingridentsdata').innerHTML = cols;
}







