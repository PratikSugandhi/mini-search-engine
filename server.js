const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();
const PORT = 3000;

const dbFile = './database.db';
if (!fs.existsSync(dbFile)) {
    const initSql = fs.readFileSync('./init.sql', 'utf8');
    const db = new sqlite3.Database(dbFile);
    db.exec(initSql, (err) => {
        if (err) console.error('Database init error:', err);
        else console.log('Database initialized');
        db.close();
    });
}

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/api/search', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    const db = new sqlite3.Database(dbFile);
    db.all(
        `SELECT * FROM images WHERE LOWER(tags) LIKE ?`,
        [`%${query}%`],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
            db.close();
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
