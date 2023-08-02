package com.mymovies.dao;

import com.mymovies.model.Movie;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcMovieDao implements MovieDao {

    private JdbcTemplate template;
    public JdbcMovieDao(DataSource dataSource) {
        template = new JdbcTemplate(dataSource);
    }

    @Override
    public boolean addMovie(Movie movie) {

        String movieId = movie.getMovieId();
        String movieTitle = movie.getMovieTitle();
        String movieGenre = movie.getMovieGenre();
        String movieOverview = movie.getMovieOverview();
        boolean isAlreadyWatched = movie.isAlreadyWatched();
        int movieRating = movie.getMovieRating();
        boolean isWantToWatch = movie.isWantToWatch();
        String imageURL = movie.getImageURL();
        double voteAverage = movie.getVoteAverage();
        String releaseDate = movie.getReleaseDate();

        String addMovieSql = "INSERT INTO movies (movie_id, movie_title, movie_genre, movie_overview, already_watched, movie_rating, want_to_watch, img_url, vote_average, release_date) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        try {
            template.update(addMovieSql, movieId, movieTitle, movieGenre, movieOverview, isAlreadyWatched, movieRating, isWantToWatch, imageURL, voteAverage, releaseDate);
            return true;
        } catch (DataAccessException e) {
            String errorMessage = "Failed to add movie to database: " + e.getMessage();
            System.out.println(errorMessage);
            return false;
        }
    }

    @Override
    public boolean deleteMovie(String movieId) {
        try {
            String deleteMovieSQL = "DELETE FROM movies WHERE movie_id = ?";
            int rowsAffected = template.update(deleteMovieSQL, movieId);
            return rowsAffected > 0;
        } catch (DataAccessException e) {
            String errorMessage = "Failed to delete movie from database: " + e.getMessage();
            System.out.println(errorMessage);
            return false;
        }
    }

    @Override
    public Movie getMovieById(String movieId) {

        String getMovieByIdSql = "SELECT movie_id, movie_title, movie_genre, movie_overview, already_watched, movie_rating, want_to_watch, img_url, vote_average, release_date " +
                "FROM movies WHERE movie_id = ?;";

        try {
            SqlRowSet rowSet = template.queryForRowSet(getMovieByIdSql, movieId);
            if(rowSet.next()) {
                return mapRowToMovie(rowSet);
            }
        } catch (DataAccessException e) {
            String errorMessage = "Failed to fetch movie from database: " + e.getMessage();
        }

        return null;
    }

    @Override
    public List<Movie> getWatchedMovies() {
        String getWatchedMoviesSql = "SELECT movie_id, movie_title, movie_genre, already_watched, movie_rating, want_to_watch, img_url, vote_average, release_date " +
                "FROM movies WHERE already_watched = true;";

        List<Movie> watchedMovies = new ArrayList<>();

        try {
            SqlRowSet rowSet = template.queryForRowSet(getWatchedMoviesSql);
            while (rowSet.next()) {
                Movie movie = mapRowToMovie(rowSet);
                watchedMovies.add(movie);
            }
        } catch (DataAccessException e) {
            String errorMessage = "Failed to fetch watched movies from database: " + e.getMessage();
        }

        return watchedMovies;
    }

    @Override
    public List<Movie> getWantToWatchMovies() {
        String getWantToWatchMoviesSql = "SELECT movie_id, movie_title, movie_genre, movie_overview, already_watched, movie_rating, want_to_watch, img_url, vote_average, release_date " +
                "FROM movies WHERE want_to_watch = true;";

        List<Movie> wantToWatchMovies = new ArrayList<>();

        try {
            SqlRowSet rowSet = template.queryForRowSet(getWantToWatchMoviesSql);
            while (rowSet.next()) {
                Movie movie = mapRowToMovie(rowSet);
                wantToWatchMovies.add(movie);
            }
        } catch (DataAccessException e) {
            String errorMessage = "Failed to fetch want-to-watch movies from database: " + e.getMessage();
        }

        return wantToWatchMovies;
    }

    public Movie mapRowToMovie (SqlRowSet result) {
        Movie movie = new Movie();
        movie.setMovieId(result.getString("movie_id"));
        movie.setMovieTitle(result.getString("movie_title"));
        movie.setMovieGenre(result.getString("movie_genre"));
        movie.setMovieOverview(result.getString("movie_overview"));
        movie.setAlreadyWatched(result.getBoolean("already_watched"));
        movie.setMovieRating(result.getInt("movie_rating"));
        movie.setWantToWatch(result.getBoolean("want_to_watch"));
        movie.setImageURL(result.getString("img_url"));
        movie.setVoteAverage(result.getDouble("vote_average"));
        movie.setReleaseDate(result.getString("release_date"));
        return movie;
    }

}
