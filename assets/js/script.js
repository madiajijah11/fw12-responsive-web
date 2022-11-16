if (window.location.pathname == "/signin.html") {
    // show password
    const password = document.getElementById("password");
    const icon = document.getElementById("icon");
    icon.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });

    // validate username and password
    const form = document.querySelector(".form-control");
    const email = document.getElementById("email");
    const alert = document.createElement("div");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // check if email and password are true
        if (
            email.value === "admin@gmail.com" &&
            password.value === "admin123"
        ) {
            alert.style.color = "green";
            alert.style.border = "1px solid green";
            alert.style.padding = "10px";
            alert.style.margin = "10px 0";
            alert.innerHTML = "Login Success";
            form.appendChild(alert);
            // remove alert after 3 seconds
            setTimeout(() => {
                alert.remove();
            }, 3000);
            setInterval(() => {
                window.location.href = "homepage.html";
            }, 3000);
        } else {
            // show alert bellow the form with red color
            alert.style.color = "red";
            alert.style.border = "1px solid red";
            alert.style.padding = "10px";
            alert.style.margin = "10px 0";
            alert.innerHTML = "Email or password is wrong";
            form.appendChild(alert);
            // remove alert after 3 seconds
            setTimeout(() => {
                alert.remove();
            }, 3000);
        }
    });
}

if (
    window.location.pathname == "/index.html" ||
    window.location.pathname === "/"
) {
    // array movie now showing
    const nowShowing = [
        {
            id: 1,
            picture: "/assets/images/Rectangle-119.png",
            alt: "SpiderMan",
        },
        {
            id: 2,
            picture: "/assets/images/Rectangle-119-1.png",
            alt: "LionKing",
        },
        {
            id: 3,
            picture: "/assets/images/Rectangle-119-2.png",
            alt: "JohnWick",
        },
        {
            id: 4,
            picture: "/assets/images/Rectangle-119.png",
            alt: "SpiderMan",
        },
        {
            id: 5,
            picture: "/assets/images/Rectangle-119-1.png",
            alt: "LionKing",
        },
    ];

    // get element movie now showing by id
    const movieNowShowing = document.getElementById("movie-now-showing");

    // for each movie now showing
    nowShowing.forEach((movie) => {
        // create element div
        const div = document.createElement("div");
        // add class movie to div
        div.classList.add("movie");
        // put div inside element with id movie-now-showing
        movieNowShowing.appendChild(div);
        const img = document.createElement("img");
        div.appendChild(img);
        img.setAttribute("src", movie.picture);
        img.setAttribute("alt", movie.alt);
    });

    // select parent element
    const upcomingMovie = document.getElementById("upcoming-movie");

    const url =
            "https://api.themoviedb.org/3/movie/upcoming?api_key=40a3fd368d6249931e24ee7f758f6377&language=en-US&page=20",
        genres =
            "https://api.themoviedb.org/3/genre/movie/list?api_key=40a3fd368d6249931e24ee7f758f6377&language=en-US";

    // Make the HTTP Api request using async/await
    const fetchAsync = async () => {
        try {
            const movie = await fetch(url);
            const genre = await fetch(genres);
            const dataMovie = await movie.json();
            const dataGenre = await genre.json();
            console.log(dataMovie);
            const getMovie = dataMovie.results;
            getMovie.forEach((movie) => {
                const div = document.createElement("div");
                div.classList.add("movie");
                upcomingMovie.appendChild(div);
                const img = document.createElement("img");
                div.appendChild(img);
                img.setAttribute(
                    "src",
                    `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
                );
                const title = document.createElement("div");
                div.appendChild(title);
                title.innerHTML = movie.title;
                const p = document.createElement("p");
                div.appendChild(p);
                // get genre id from movie then find genre name from genre api
                movie.genre_ids.forEach((id) => {
                    dataGenre.genres.forEach((genre) => {
                        // if id from movie equal id from genre
                        if (id === genre.id) {
                            // put genre name inside p
                            p.innerHTML += `${genre.name} `;
                        }
                    });
                });
                const details = document.createElement("div");
                div.appendChild(details);
                const a = document.createElement("a");
                details.appendChild(a);
                a.setAttribute("href", "movie-details.html");
                a.innerHTML = "Details";
            });
        } catch (error) {
            console.error(error);
        }
    };

    fetchAsync();
}

if (window.location.pathname == "/homepage.html") {
    // array movie now showing
    const nowShowing = [
        {
            id: 1,
            picture: "/assets/images/Rectangle-119.png",
            alt: "SpiderMan",
            title: "Spider-Man: Homecoming",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 2,
            picture: "/assets/images/Rectangle-119-1.png",
            alt: "LionKing",
            title: "Lion King",
            genre: "Action, Adventure",
        },
        {
            id: 3,
            picture: "/assets/images/Rectangle-119-2.png",
            alt: "JohnWick",
            title: "John Wick",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 4,
            picture: "/assets/images/Rectangle-119.png",
            alt: "SpiderMan",
            title: "Spider-Man: Homecoming",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 5,
            picture: "/assets/images/Rectangle-119-1.png",
            alt: "LionKing",
            title: "Lion King",
            genre: "Action, Adventure",
        },
    ];

    // get element movie now showing by id
    const movieNowShowing = document.getElementById("movie-now-showing");

    // for each movie now showing
    nowShowing.forEach((movie) => {
        // create element div
        const div = document.createElement("div");
        // add class movie to div
        div.classList.add("movie");
        div.classList.add("active");
        // put div inside element with id movie-now-showing
        movieNowShowing.appendChild(div);
        const img = document.createElement("img");
        // create element img and put inside div
        div.appendChild(img);
        // set attribute src and alt
        img.setAttribute("src", movie.picture);
        img.setAttribute("alt", movie.alt);
        const newDiv = document.createElement("div");
        // create element div and put inside div
        div.appendChild(newDiv);
        const title = document.createElement("div");
        // create element div and put inside newDiv
        newDiv.appendChild(title);
        // set content to title
        title.innerHTML = movie.title;
        const p = document.createElement("p");
        // create element p and put inside newDiv
        newDiv.appendChild(p);
        // set content to p
        p.innerHTML = movie.genre;
        const newDiv1 = document.createElement("div");
        // create element div and put inside div
        newDiv.appendChild(newDiv1);
        const a = document.createElement("a");
        // create element a and put inside newDiv1
        newDiv1.appendChild(a);
        // set a attribute and content
        a.setAttribute("href", "movie-details.html");
        a.innerHTML = "Details";
    });

    // array upcoming movie
    const upcoming = [
        {
            id: 1,
            picture: "/assets/images/Rectangle-139.png",
            alt: "BlackWidow",
            title: "Black Widow",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 2,
            picture: "/assets/images/Rectangle-139-1.png",
            alt: "TheWitches",
            title: "The Witches",
            genre: "Adventure, Comedy, Family",
        },
        {
            id: 3,
            picture: "/assets/images/Rectangle-139-2.png",
            alt: "Tenet",
            title: "Tenet",
            genre: "Action, Sci-Fi",
        },
        {
            id: 4,
            picture: "/assets/images/Rectangle-139.png",
            alt: "BlackWidow",
            title: "Black Widow",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 5,
            picture: "/assets/images/Rectangle-139-1.png",
            alt: "TheWitches",
            title: "The Witches",
            genre: "Adventure, Comedy, Family",
        },
    ];

    // select parent element
    const upcomingMovie = document.getElementById("upcoming-movie");

    // for each movie upcoming
    upcoming.forEach((movie) => {
        const div = document.createElement("div");
        div.classList.add("movie");
        upcomingMovie.appendChild(div);
        const img = document.createElement("img");
        div.appendChild(img);
        img.setAttribute("src", movie.picture);
        const title = document.createElement("div");
        div.appendChild(title);
        title.innerHTML = movie.title;
        const genre = document.createElement("p");
        div.appendChild(genre);
        genre.innerHTML = movie.genre;
        const details = document.createElement("div");
        div.appendChild(details);
        const a = document.createElement("a");
        details.appendChild(a);
        a.setAttribute("href", "movie-details.html");
        a.innerHTML = "Details";
    });
}

if (window.location.pathname == "/view-all.html") {
    const movieLists = [
        {
            id: 1,
            picture: "/assets/images/Rectangle-139.png",
            title: "Black Widow",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 2,
            picture: "/assets/images/Rectangle-139.png",
            title: "Black Widow",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 3,
            picture: "/assets/images/Rectangle-139.png",
            title: "Black Widow",
            genre: "Action, Adventure, Sci-Fi",
        },
        {
            id: 4,
            picture: "/assets/images/Rectangle-139.png",
            title: "Black Widow",
            genre: "Action, Adventure, Sci-Fi",
        },
    ];

    const movieList = document.querySelectorAll("#movie-list");
    movieLists.forEach((movie) => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie");
        const img = document.createElement("img");
        img.setAttribute("src", movie.picture);
        img.setAttribute("alt", movie.title);
        movieItem.appendChild(img);
        const div = document.createElement("div");
        div.innerHTML = movie.title;
        movieItem.appendChild(div);
        const p = document.createElement("p");
        p.innerHTML = movie.genre;
        movieItem.appendChild(p);
        const div1 = document.createElement("div");
        movieItem.appendChild(div1);
        const a = document.createElement("a");
        a.setAttribute("href", "movie-details.html");
        a.innerHTML = "Details";
        div1.appendChild(a);
        // put movieItem inside movieList with id movie-list
        movieList.forEach((list) => {
            list.appendChild(movieItem.cloneNode(true));
        });
    });
}
