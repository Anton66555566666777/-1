const input = document.querySelector(".search_input");
const button = document.querySelector('search_button');
const select = document.querySelector(".search_select");

button.addEventListener("click, submitRequest");

function submitRequest(event) {
    event.preventDefault();
    const value = input.value;
    const searchEngine = select.value;
    let params;
    if(value)
    if (searchEngine  === "google " || searchEngine ==="bing") {
       params = "/search?q=";
     } else if (searchEngine = "Yandex") {
        params = '/search?text=';
       }  else if (searchEngine === "duckduckgo"){
params = "?q=";
       }
       console.log(params);
       window.location.href = "https:/www.$(searchEngine).com/$(params)" + value

    }
    