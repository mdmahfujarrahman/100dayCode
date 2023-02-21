let movieNam = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let serachResult = document.getElementById("result");

let searchMovie = () => {
    let movieName = movieNam.value;
    const url = `https://www.omdbapi.com/?apikey=e6d4a978&t=${movieName}`;
    if (movieName.length <= 0) {
        serachResult.innerHTML = `<h1 class="msg">Please Enter Movie Name</h1>`;
    } else {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === "False") {
                    serachResult.innerHTML = `<h1 class="msg">${data.Error}</h1>`;
                } else {
                    console.log(data);
                    let movieData = `
                    <div class="info"> 
                            <img src="${
                                data.Poster
                            }" alt="Movie Poster" class="poster">
                            <div>
                                <h2 class="title">${data.Title}</h2>
                                <div class="rating">
                                    <img src="/star.png" alt="" />
                                    <h4 class="rating">${data.imdbRating}</h4>
                                </div>
                                <div class="details">
                                    <span>${data.Rated}</span>
                                    <span>${data.Year}</span>
                                    <span>${data.Runtime}</span>

                                </div>
                                <div class="genre">
                                    <div>
                                        ${data.Genre.split(",").join(
                                            "</div><div>"
                                        )}
                                    </div>
                                </div>
                            </div>
                    </div> 
                    <h3>Plot:</h3>
                    <p class="plot">${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p class="cast">${data.Actors}</p>

                    `;
                    serachResult.innerHTML = movieData;
                }
            })
            .catch((err) => {
                console.error(err);
                serachResult.innerHTML = `<h3>Something Wrong</h3>`;
            });
    }
};

searchBtn.addEventListener("click", searchMovie);
// window.addEventListener("load", searchMovie);
