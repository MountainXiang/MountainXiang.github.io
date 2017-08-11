var musicList =[
    "邓丽欣 - 七夕.mp3",
    "高姗 - 遇见你的时候所有星星都落到我头上.mp3",
    "金莎 - 星月神话.mp3",
    "南拳妈妈-橘子汽水.mp3",
    "齐晨 - 咱们结婚吧.mp3",
    "田馥甄 - 小幸运.mp3",
    "汪苏泷 - 一笑倾城.mp3",
    "杨坤 - 空城.mp3",
    "周笔畅 - 谁动了我的琴弦.mp3",
    "周杰伦 - 告白气球.mp3",
    "Beyond - 喜欢你.mp3",
    "Cash Cash - Sugar Rush.mp3",
    "Despacito -  Justin Bieber.mp3",
    "Everybody - Ingrid Michaelson.mp3",
    "F4 - 流星雨.mp3",
    "Melody - 陶喆.mp3",
    "Owl City - The Saltwater Room.mp3",
    "Save Me - Aimee Allen.mp3",
    "Taylor Swift - Love Story.mp3",
]
$(document).ready(function() {
    //var randomIndex = Math.floor(Math.random() * musicList.length);
    var randomIndex = 17;
    // alert(musicList[randomIndex]);

    /*在jQuery中，你可以很容易的使用css 类名和id来获得元素。
    例如：
    1 ID： #id
     $(‘#ida’)—选择id 为ida的所有元素，不管元素的标签名如何。
     $(‘div#ida’)—选择id为ida的所有div标签元素。
     
    2 Class：.classname
    $(‘.classA’)—选择类名有一个为classA的所有元素，不管其标签名如何。
    $(‘div.classA’)—选择类名有一个为classa的所有div元素。
    */
    // alert(document.querySelector("#bgmMusic"));

    $('#bgmMusic').attr("src", "../music/" + musicList[randomIndex]);//设置url,注意相对路径
    $('audio#bgmMusic').attr("autoplay", "true");//直接播放
    document.getElementById("bgmMusic").volume = 0.2;//将音频音量设置为 20%
})
