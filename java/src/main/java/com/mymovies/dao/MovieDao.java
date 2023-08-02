package com.mymovies.dao;

import com.mymovies.model.Movie;

import java.util.List;

public interface MovieDao {

    public boolean addMovie(Movie movie);

    public boolean deleteMovie(String movieId);

    public Movie getMovieById(String movieId);

    public List<Movie> getWatchedMovies(); // Add this method

    public List<Movie> getWantToWatchMovies(); // Add this method

}
