BEGIN TRANSACTION;

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');


INSERT INTO movies (movie_id, movie_title, movie_genre, already_watched, movie_rating, want_to_watch, img_url)
	VALUES ('765810', 'The Moon is a Hologram', 35, NULL, NULL, false, '/vPFnCYMqalPDr8bvEj4qXjP2aw1.jpg');

INSERT INTO movies (movie_id, movie_title, movie_genre, already_watched, movie_rating, want_to_watch, img_url)
	VALUES ('519182', 'Despicable Me 4', 35, true, 2, NULL, '/cbMmYOwvDjFMa12XqtifRzYeInu.jpg');


COMMIT TRANSACTION;
