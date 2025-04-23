DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    tags TEXT NOT NULL
);

INSERT INTO images (title, url, tags) VALUES
('Annapurna Temple', '/images/Annapurna_temple.jpg', 'Annapurna Temple,Temple,Tourist Place'),
('Bada Ganpati Temple', '/images/bada_ganpati.jpg', 'Bada Ganpati Temple,Temple,Tourist Place'),
('Chhappan Dukan', '/images/Chhappan_dukan.jpg', 'Chhappan Dukan,Dukan,Shop,Tourist Place'),
('Choral Dam', '/images/Choral_dam.jpg', 'Charol Dam,Dam,Tourist Place'),
('Geeta Bhawan', '/images/geeta_bhawan.jpg', 'Geeta Bhawan,Tourist Place'),
('White Church', '/images/indore_white_church.jpg', 'White Church,Tourist Place'),
('Iskcon Temple', '/images/iskcon_temple.jpg', 'Iskcon Temple,Temple,Tourist Place'),
('Kanch Mandir', '/images/kanch_mandir.jpg', 'Kanch Mandir,Temple,Tourist Place'),
('Khajrana Temple', '/images/khajrana_temple.jpg', 'Khajrana Temple,Temple,Tourist Place');
