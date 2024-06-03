<h1>REST API для платформы прослушивания музыки</h1>

<p>Добро пожаловать в репозиторий REST API для сервиса прослушивания музыки. Этот проект предоставляет возможности для регистрации и аутентификации пользователей, прослушивания музыкальных треков, а также создания и управления плейлистами. Пользователи могут делиться своими плейлистами с друзьями.</p>

<h2>Основные функции:</h2>
<ul>
    <li>Регистрация новых пользователей</li>
    <li>Вход в систему для существующих пользователей</li>
    <li>Поиск музыкальных треков</li>
    <li>Управление плейлистами</li>
    <li>Создание новых плейлистов</li>
    <li>Добавление треков в плейлисты</li>
    <li>Удаление треков из плейлистов</li>
    <li>Обмен плейлистами с друзьями</li>
</ul>

<h2>Диаграмма базы данных</h2>

<img src="https://github.com/ArtjomZadera/restapi_music_zadera_sut/assets/113170386/af7d0f2d-31c9-43c9-afdb-def950a338c3" alt="Пример изображения">

<h2>Использование</h2>

<h3>Регистрация и аутентификация пользователей</h3>

<h4>Регистрация пользователя</h4>
<p>Отправьте POST-запрос на <code>/api/register</code> с данными пользователя.</p>

<p>Пример запроса:</p>
<pre><code>{
  "username": "example_user",
  "email": "user@example.com",
  "password": "password123"
}</code></pre>

<h4>Аутентификация пользователя</h4>
<p>Отправьте POST-запрос на <code>/api/login</code> с данными для входа.</p>

<p>Пример запроса:</p>
<pre><code>{
  "email": "user@example.com",
  "password": "password123"
}</code></pre>

<h3>Запросы связанные с треками</h3>

<h4>Добавление трека</h4>
<p>Отправьте POST-запрос на <code>/api/music</code> с данными трека.</p>

<p>Пример запроса:</p>
<pre><code>{
  "musicname": "any",
  "music_group_id": "any",
  "filepath": "any",
  "duration": "any",
  "music_image": "any"
}</code></pre>

<h4>Просмотр всех треков</h4>
<p>Отправьте GET-запрос на <code>/api/music</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Просмотр трека по Ид</h4>
<p>Отправьте GET-запрос на <code>/api/music/{id}</code> с Ид трека.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Обновление трека</h4>
<p>Отправьте PUT-запрос на <code>/api/music/{id}</code> с обновленными данными трека.</p>

<p>Пример запроса:</p>
<pre><code>{
  "musicname": "new_name",
  "music_group_id": "new_group_id",
  "filepath": "new_filepath",
  "duration": "new_duration",
  "music_image": "new_image"
}</code></pre>

<h4>Удаление трека</h4>
<p>Отправьте DELETE-запрос на <code>/api/music/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h3>Создание плейлиста</h3>

<h4>Создание нового плейлиста</h4>
<p>Отправьте POST-запрос на <code>/api/playlists</code> с названием плейлиста.</p>

<p>Пример запроса:</p>
<pre><code>{
  "playlistname": "My Playlist",
  "userId": "user_id"
}</code></pre>

<h4>Просмотр всех плейлистов</h4>
<p>Отправьте GET-запрос на <code>/api/playlists</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Просмотр плейлиста по Ид</h4>
<p>Отправьте GET-запрос на <code>/api/playlists/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Обновление плейлиста</h4>
<p>Отправьте PUT-запрос на <code>/api/playlists/{id}</code> с обновленными данными плейлиста.</p>

<p>Пример запроса:</p>
<pre><code>{
  "playlistname": "Updated Playlist Name"
}</code></pre>

<h4>Удаление плейлиста</h4>
<p>Отправьте DELETE-запрос на <code>/api/playlists/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h3>Добавление трека в плейлист</h3>

<h4>Добавление трека в плейлист</h4>
<p>Отправьте POST-запрос на <code>/api/playlist/{id}</code> с идентификатором трека.</p>

<p>Пример запроса:</p>
<pre><code>{
  "musicId": 1
}</code></pre>

<h3>Запросы связанные с авторами</h3>

<h4>Просмотр всех авторов</h4>
<p>Отправьте GET-запрос на <code>/authors</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Добавление автора</h4>
<p>Отправьте POST-запрос на <code>/authors</code> с данными автора.</p>

<p>Пример запроса:</p>
<pre><code>{
  "music_group_name": "any",
  "music_group_image": "any"
}</code></pre>

<h4>Просмотр автора по Ид</h4>
<p>Отправьте GET-запрос на <code>/authors/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Обновление автора</h4>
<p>Отправьте PUT-запрос на <code>/authors/{id}</code> с обновленными данными автора.</p>

<p>Пример запроса:</p>
<pre><code>{
  "music_group_name": "new_name",
  "music_group_image": "new_image"
}</code></pre>

<h4>Удаление автора</h4>
<p>Отправьте DELETE-запрос на <code>/authors/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Поиск автора по имени</h4>
<p>Отправьте GET-запрос на <code>/authors/search/{name}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h3>Запросы связанные с совместным использованием плейлистов</h3>

<h4>Создание общего плейлиста</h4>
<p>Отправьте POST-запрос на <code>/shared</code> с данными владельца, плейлиста и друга.</p>

<p>Пример запроса:</p>
<pre><code>{
  "ownerId": "owner_id",
  "playlistId": "playlist_id",
  "friendId": "friend_id"
}</code></pre>

<h4>Просмотр общего плейлиста по Ид</h4>
<p>Отправьте GET-запрос на <code>/shared/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<h4>Обновление общего плейлиста</h4>
<p>Отправьте PUT-запрос на <code>/shared/{id}</code> с обновленными данными общего плейлиста.</p>

<p>Пример запроса:</p>
<pre><code>{
  "ownerId": "new_owner_id",
  "playlistId": "new_playlist_id",
  "friendId": "new_friend_id"
}</code></pre>

<h4>Удаление общего плейлиста</h4>
<p>Отправьте DELETE-запрос на <code>/shared/{id}</code>.</p>

<p>Пример запроса:</p>
<pre><code>{}</code></pre>

<p>Спасибо за использование нашего сервиса! Если у вас есть вопросы или предложения, пожалуйста, создайте issue в этом репозитории.</p>
