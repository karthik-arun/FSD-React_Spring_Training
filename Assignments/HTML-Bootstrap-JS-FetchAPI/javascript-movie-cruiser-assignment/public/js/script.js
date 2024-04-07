let moviesList = [];
let favouriteMovies = [];

function getMovies() {
	return fetch('http://localhost:3000/movies').then(
		response => {
			if (response.ok) {
				return response.json();
			}
			else {
				return Promise.reject(new Error('Server Error'));
			}
		}).then(moviesListResponse => {
			moviesList = moviesListResponse;
			displaymoviesList(moviesList);
			return moviesListResponse;
		}).catch(error => {
			return error;
		})

}

function getFavourites() {
	return fetch('http://localhost:3000/favourites').then(
		response => {
			if (response.ok) {
				return response.json();
			}
			else {
				return Promise.reject(new Error('Server Error'));
			}
		}).then(moviesListResponse => {
			favouriteMovies = moviesListResponse;
			displayFavList(favouriteMovies);
			return moviesListResponse;
		}).catch(error => {
			return error;
		})

}

function addFavourite(id) {
	movie = moviesList.find(movie => {
		if (movie.id == id)
			return movie;
	})
	favExists = favouriteMovies.find(favMovie => {
		if (favMovie.id == movie.id) {
			return favMovie;
		}
	});
	if (favExists) {
		return Promise.reject(new Error('Movie is already added to favourites'));
	} else {
		return fetch("http://localhost:3000/favourites", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(movie),
		}).then(response => {
			if (response.ok) {
				return response.json();
			}
			else{
				
				return Promise.reject(new Error('Server Error'));
			}
		}
		).then(addedMovie => {
			favouriteMovies.push(addedMovie);
			displayFavList(favouriteMovies);
			return favouriteMovies;
		}
		)
	  
	}

	
}

function displaymoviesList(moviesList) {
	const ele = document.getElementById('moviesList');
	let htmlString = `<div class="movie-card text-center">`;

	moviesList.forEach(movie => {
		htmlString += `				
		<div class="card" style="width: 18rem;">
		<img class="card-img-top" src='${movie.posterPath}' alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">${movie.title}</h5>
			<a href="#" class="btn btn-primary " onclick='addFavourite(${movie.id})'><i class="fa fa-heart-o"></i> Add To Favourites</a>
		</div>
		</div>
						
		`
	});

	htmlString = htmlString + `</div>`;

	ele.innerHTML = htmlString;
}

function displayFavList(moviesList) {
	const ele = document.getElementById('favouritesList');
	let htmlString = `<div class="movie-card text-center">`;

	moviesList.forEach(movie => {
		htmlString += `				
		<div class="card" style="width: 18rem;">
		<img class="card-img-top" src='${movie.posterPath}' alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">${movie.title}</h5>
		</div>
		</div>
						
		`
	});

	htmlString = htmlString + `</div>`;

	ele.innerHTML = htmlString;
}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


