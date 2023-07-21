BEGIN TRANSACTION;

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');


INSERT INTO movies (movie_id, movie_title, movie_genre, movie_overview, already_watched, movie_rating, want_to_watch, img_url)
	VALUES ('574060', 'Gunpowder Milkshake', 28, 'To protect an 8-year-old girl, a dangerous assassin reunites with her mother and her lethal associates to take down a ruthless crime syndicate and its army of henchmen.', NULL, NULL, true, 'https://image.tmdb.org/t/p/original/5AaKulwpUtkscAokKWtLenGTfVS.jpg');

INSERT INTO movies (movie_id, movie_title, movie_genre, movie_overview, already_watched, movie_rating, want_to_watch, img_url)
	VALUES ('808', 'Shrek', 10751, 'It ain''t easy bein'' green -- especially if you''re a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.', true, 2, true, 'https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg');

COMMIT TRANSACTION;
