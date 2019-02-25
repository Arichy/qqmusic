const database = window.openDatabase('music', '1.0', '存放音乐的数据库', 4 * 1024 * 1024);

function query(ctx, sql) {
    return new Promise((resolve, reject) => {
        ctx.executeSql(sql, [], (ctx, result) => resolve(result), (ctx, error) => reject(error));
    });
}

// database.transaction((ctx, result) => {
//     ctx.executeSql(`CREATE TABLE IF NOT EXISTS author_table (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name text
// )`, [], (ctx, result) => {
//             console.log('建表成功');
//         }, (ctx, error) => {
//             console.log('建婊失败', error);

//         });
// });



export default new Promise((resolve, reject) => {
    database.transaction(async ctx => {
        query(ctx, `DROP TABLE author_table`);
        query(ctx, `DROP TABLE album_table`);
        query(ctx, `DROP TABLE song_table`);

    });

    database.transaction(async ctx => {
        query(ctx, `CREATE TABLE IF NOT EXISTS author_table (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text
    )`);

        query(ctx, `CREATE TABLE IF NOT EXISTS album_table (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text,
        author_id INTEGER
    )`);

        query(ctx, `CREATE TABLE IF NOT EXISTS song_table (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text,
        album_id INTEGER
    )`);

    });

    database.transaction(async ctx => {
        query(ctx, `INSERT INTO author_table (name) VALUES ('五月天');`);
        query(ctx, `INSERT INTO author_table (name) VALUES ('任然');`);
        query(ctx, `INSERT INTO author_table (name) VALUES ('曾惜');`);
        query(ctx, `INSERT INTO author_table (name) VALUES ('胡66');`);
        query(ctx, `INSERT INTO author_table (name) VALUES ('许嵩');`);
        query(ctx, `INSERT INTO author_table (name) VALUES ('高桥优');`);
        query(ctx, `INSERT INTO author_table (name) VALUES ('张紫豪');`);

    });

    database.transaction(async ctx => {
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('自传',1);`);
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('空空如也',2);`);
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('不要你为难',3);`);
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('浪人琵琶',4);`);
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('寻宝游戏',5);`);
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('吃醋',6);`);
        query(ctx, `INSERT INTO album_table (name,author_id) VALUES ('可不可以',7);`);

    });

    database.transaction(async ctx => {
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('后来的我们',1);`);
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('如果我们不曾相遇',1);`);
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('空空如也',2);`);
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('讲真的',3);`);
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('浪人琵琶',4);`);
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('如约而至',5);`);
        query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('吃醋',6);`);
        await query(ctx, `INSERT INTO song_table (name,album_id) VALUES ('可不可以',7);`);
        resolve({ database, query });
    });

});
