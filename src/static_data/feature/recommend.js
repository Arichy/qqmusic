// 精选页面 为你推荐的歌单数据

class RecommendData {
    constructor(imgSrc, content, comment, hover, showplay = true) {
        this.imgSrc = require(`../../../public/static_data/img/feature/recommend/${imgSrc}`);
        this.content = content;
        this.comment = comment;
        this.hover = hover;
        this.showplay = showplay;
    }
}

const recommendDataArr = [
    new RecommendData(
        "1.png",
        "每日推荐",
        "基于你最近听的歌曲",
        "基于你最近听的歌曲推荐",
        false
    ),
    new RecommendData(
        "2.png",
        "个性电台",
        "每天给你不同的惊喜",
        "基于你最近听的歌曲"
    ),
    new RecommendData("3.png", "每日新歌：五月天谱写自传最终章"),
    new RecommendData("4.png", "华语：那些描叙你内心深处的歌", "天后", "天后"),
    new RecommendData(
        "5.png",
        "被窝里的音符！给你一个赖床的理由",
        "空空如也",
        "空空如也"
    ),
    new RecommendData(
        "6.png",
        "华语歌里的烟雨天，总是铭刻着邂逅",
        "听见下雨的声音",
        "听见下雨的声音"
    ),
    new RecommendData(
        '7.png',
        '「华语」歌词里的异想世界',
        '天龙八部之宿敌',
        '天龙八部之宿敌'
    ),
    new RecommendData(
        '8.png',
        '2018年度单曲弹幕量 Top 100'
    ),
    new RecommendData(
        '9.png',
        '寻医问药 | 独立国摇治百病'
    ),
    new RecommendData(
        '10.png',
        '呢喃细语 | 浅酌清唱古风'
    ),
    new RecommendData(
        '11.png',
        'Progressive House · 激进式狂潮'
    ),
    new RecommendData(
        '12.png',
        'ACG女声：泪掠夜空，是她的箴言'
    )
];

export default recommendDataArr;
