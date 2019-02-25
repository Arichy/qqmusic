// 精选页面 图片轮播的图片数据
const carouselImgSrcArr = Array.from({ length: 5 }).map((value, index) =>
    require(`../../../public/static_data/img/feature/carousel/${index + 1}.jpg`)
);

export default carouselImgSrcArr;