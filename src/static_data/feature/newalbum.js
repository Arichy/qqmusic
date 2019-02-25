// 精选页面 专辑首发的歌单数据

class NewalbumData {
    constructor(imgSrc, album, author) {
        this.imgSrc = require(`../../../public/static_data/img/feature/newalbum/${imgSrc}`);
        this.album = album;
        this.author = author;
    }
}

export default [
    new NewalbumData('1.jpg', '睡皇后', ['邓紫棋']),
    new NewalbumData('2.jpg', '起风了', ['买辣椒也用券']),
    new NewalbumData('3.jpg', '自传', ['五月天']),
    new NewalbumData('4.jpg', '第二人生（明日版）', ['五月天']),
    new NewalbumData('5.jpg', '寻宝游戏', ['许嵩']),
    new NewalbumData('6.jpg', '青年晚报', ['许嵩']),
    new NewalbumData('7.jpg', '浪人琵琶', ['胡66', '单色凌'])
];
