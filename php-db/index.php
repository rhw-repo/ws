<!doctype html>
<html lang='en'>

<head>
  <meta charset='UTF-8' />
  <title>Demo</title>
  <style>
    body {
      display: grid;
      place-items: center;
      height: 100vh;
      margin: 0;
      font-family: sans-serif;
    }
  </style>
</head>

<body>
  <h1>Recommended Books</h1>


  <?php
  $books = [
    [
      'name' => 'Do Androids Dream of Electric Sheep',
      'author' => 'Philip K Dick',
      'releaseYear' => 1968,
      'purchaseUrl' => 'http://example.com',

    ],
    [
      'name' => 'Project Hail Mary',
      'author' => 'Andy Wier',
      'releaseYear' => 2021,
      'purchaseUrl' => 'http://example.com',
    ],
    [
      'name' => 'The Martian',
      'author' => 'Andy Wier',
      'releaseYear' => 2011,
      'purchaseUrl' => 'http://example.com',
    ],
  ];

  function filterByAuthor()
  {
    return "gibberish";
  }

  ?>

  <ul>
    <?php foreach ($books as $book) : ?>
      <?php if ($book['author'] === 'Andy Wier') : ?>
        <li>
          <a href='<?= $book['purchaseUrl'] ?>'>
            <?= $book['name']; ?> (<?= $book['releaseYear'] ?>) - By <?= $book['author'] ?>
          </a>
        </li>

      <?php endif; ?>
    <?php endforeach; ?>
  </ul>

  <p>
    <?= filterByAuthor() ?>
  </p>

</body>

</html>