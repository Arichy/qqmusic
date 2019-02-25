class NewsongData {
    constructor(imgSrc, song, author, sq = true, mv = false) {
        this.imgSrc = require(`../../../public/static_data/song/cover/${imgSrc}.jpg`);
        this.song = song;
        this.author = author;
        this.sq = sq;
        this.mv = mv;
    }
};

// const database = window.openDatabase('music', '1.0', '存放音乐的数据库', 4 * 1024 * 1024);

function query(ctx, sql) {
    return new Promise((resolve, reject) => {
        ctx.executeSql(sql, [], (ctx, result) => resolve(result), (ctx, error) => reject(error));
    });
}

import dbPromise from '@/db';

export default new Promise((resolve, reject) => {
    dbPromise.then(({ database, query }) => {
        database.transaction(async ctx => {
            const data = Array.from((await query(ctx, `SELECT song_table.name AS songName,album_table.name AS albumName,author_table.name AS authorName
    FROM song_table INNER JOIN album_table INNER JOIN author_table 
    ON song_table.album_id=album_table.id AND album_table.author_id=author_table.id`)).rows);

            let resultArr = data.map(({ songName, albumName, authorName }) => new NewsongData(albumName, songName, authorName));

            resolve(resultArr);
        });
    });
});




// database.transaction(async ctx => {

    // const result = await query(ctx, `SELECT song_table.name
    // FROM song_table INNER JOIN album_table INNER JOIN author_table 
    // ON song_table.album_id=album_table.id AND album_table.author_id=author_table.id`);

    // console.log(6);


// });
