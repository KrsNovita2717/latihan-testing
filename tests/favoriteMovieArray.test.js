import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';

let favoriteMovies = [];

const FavoriteMovieArray = {
  getMovie(id) {
    if (!id) {
      return;
    }

    return favoriteMovies.find((movie) => movie.id === id);
  },

  getAllMovies() {
    return favoriteMovies;
  },

  putMovie(movie) {
    // eslint-disable-next-line no-prototype-builtins
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getMovie(movie.id)) {
      return;
    }

    favoriteMovies.push(movie);
  },

  deleteMovie(id) {
    favoriteMovies = favoriteMovies.filter((movie) => movie.id !== id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteMovies = [];
  });

  itActsAsFavoriteMovieModel(FavoriteMovieArray);
});
