DROP TABLE IF EXISTS country; 

CREATE TABLE songs(
    song_id INT GENERATED ALWAYS AS IDENTITY,
    song_name VARCHAR(50) NOT NULL, 
    artist VARCHAR(50) NOT NULL, 
    release_year INT NOT NULL, 
    genre VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    bpm INT,
    duration_sec INT,
    energy INT,
    danceability INT, 
    PRIMARY KEY(song_id)
);


INSERT INTO songs (song_name, artist, release_year, genre, description, bpm, duration_sec, energy, danceability) 
VALUES 
('Active', 'Asake & Travis Scott', 2024, 'Afrobeats, Hip-Hop', 'A high-energy Afrobeats and hip-hop fusion with infectious rhythms and energetic delivery.', 120, 180, 90, 85),
  ('Layla', 'Eric Clapton', 1970, 'Rock, Blues', 'A legendary rock ballad with an iconic guitar riff and heartfelt lyrics.', 112, 420, 80, 50),
  ('Dancing Circles', 'Sampha', 2023, 'R&B, Electronic', 'A soulful, experimental track blending electronic textures with Sampha’s unique vocal style.', 110, 220, 75, 70),
  ('Club Classics', 'Charli XCX', 2024, 'Pop, Electronic', 'A dancefloor anthem with pulsating beats and high-energy pop production.', 125, 200, 95, 90),
  ('This Must Be the Place', 'Talking Heads', 1983, 'New Wave, Alternative', 'A warm and introspective new wave classic known for its dreamy melody and poetic lyrics.', 114, 290, 70, 75);


