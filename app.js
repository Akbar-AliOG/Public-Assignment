const getData = async (url, params) => {
    try {
      return await axios.get(url, params);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getMovies1 = async () => {
    let datatag = document.getElementById("datatag");
    datatag.innerHTML = "";
    let selectedMovie = document.getElementById("mainselect");
    console.log("selected movie: " + selectedMovie.value);
    const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "",
        query: selectedMovie.value,
      }
    });
  
    console.log("size: " + movieData.data.results.length)
    if (movieData.data.results.length < 1) {
      return;
    }

      let movie = movieData.data.results[0];
      console.log("movie: " + movie)
      const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
        params: {
          api_key: "",
          append_to_response: "videos",
        }
      });
  
      const p = document.createElement('p');
      p.setAttribute('id','para1')
  
      p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.overview}`;

      datatag.append(p);

  };