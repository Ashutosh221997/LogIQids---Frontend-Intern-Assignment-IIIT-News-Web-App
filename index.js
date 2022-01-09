console.log("This is my Ashutosh Gaur News js file");

let source = "bbc-news";
let apiKey = "d093053d72bc40248998159804e0e67d";

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function(element){
          let news = `<div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse"
                                    aria-expanded="true" aria-controls="collapseOne">
                                  ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" 
                            data-parent="#accordionExample">
                                <div class="card-body"> ${element["description"]} </div>
                            </div>
                        </div>`;
            newsHtml += news;
            });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
 }


