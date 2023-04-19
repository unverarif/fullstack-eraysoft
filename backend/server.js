const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

// Mysql Bağlantısı
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '132465798a',
  database: 'test'
});


// POST MAPPING

app.post('/iletisim', (req, res) => {
  const { email, konu, mesaj } = req.body;
  const sql = `INSERT INTO contacts (email, konu, mesaj) VALUES ('${email}', '${konu}', '${mesaj}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`${result.affectedRows} satır eklendi!`);
    res.send('Form başarıyla gönderildi!');
  });
});

app.post('/help', (req, res) => {
  const { sirket, isim, email, tel, urun, sistem, mesaj } = req.body;
  const sql = `INSERT INTO help_form (sirket, isim, email, tel, urun, sistem, mesaj) VALUES ('${sirket}', '${isim}', '${email}', '${tel}', '${urun}', '${sistem}', '${mesaj}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`${result.affectedRows} satır eklendi!`);
    res.send('Form başarıyla gönderildi!');
  });
});


// GETMAPING

app.get('/', (req, res) => {
  connection.query('SELECT * FROM navbar_items', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/help', (req, res) => {
  connection.query('SELECT * FROM help', (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})

app.get('/about', (req, res) => {
  connection.query('SELECT * FROM hakkimizda', (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})

app.get('/panini', (req, res) => {
  connection.query('SELECT * FROM panini', (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})

app.get('/idscanner', (req, res) => {
  connection.query('SELECT * FROM idscanner_faq', (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})

app.get('/iletisim', (req, res) => {
  connection.query('SELECT * FROM contacts_titles', (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})

// Port Çalıştırma
app.listen(3000, () => {
  console.log('Server running on port 3000');
});