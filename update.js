// 1. 公众号二维码
function addWeQr() {
    let navList = document.querySelector('#main-menu')
    let weQr = document.createElement('li')
    weQr.innerHTML = `<a href="" class="smooth">
    <i class="linecons-star"></i>
    <span class="title">启航者公众号</span>
    <span class="picture"><img style="max-width:100%;margin-top:.8rem;" src="https://weqihang.cn/wp-content/uploads/2022/02/qrcode_wechat.jpg" alt="公众号"></span>
</a>`
    navList.appendChild(weQr)
}



// 2.回主站的链接

function changeLogoLink() {
    let logoDiv = document.querySelector('div.logo')

    logoDiv.innerHTML =
        `<a href="https://weqihang.cn/" class="logo-expanded">

    <p class="overflowClip_2" style="font-size: 20px; color:white;"><strong>启航者</strong></p>

</a>
<a href="https://weqihang.cn/" class="logo-collapsed">

    <p class="overflowClip_2" style="font-size: 20px; color:white;"><strong>启航者</strong></p>

</a>`;
}


//3. 导航搜索图标链接
function changeSearchIconLink() {
    document.querySelector('.search-icon').style.background = "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png') -40px 0px;"
}



// 4. 搜索引擎

const two_search_engine =
    `
// wiki
//quora

var searchData = {
    "thisSearch": "https://www.google.com/search?q=",
    "thisSearchIcon": "https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png",
    "hotStatus": true,
    "data": [{
        "name": "谷歌",
        "img": "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png')  -105px 0px",
        "position": "-40px 0px",
        "url": "https://www.google.com/search?q="
    }, {
        "name": "必应",
        "img": "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png')  -80px -25px",
        "position": "0px -40px",
        "url": "https://cn.bing.com/search?q="
    }, {
        "name": "百度",
        "img": "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png') -80px 0px",
        "position": "0px 0px",
        "url": "https://www.baidu.com/s?wd="
    }, {
        "name": "知乎",
        "img": "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png') -105px -100px",
        "position": "-40px -160px",
        "url": "https://www.zhihu.com/search?type=content\u0026q="
    },{
        "name": "维基百科",
        "img": "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png') -80px -200px",
        "position": "0px -320px",
        "url": "https://en.wikipedia.org/w/index.php?search="
    },
    {
        "name": "Quora",
        "img": "url('https://s3.bmp.ovh/imgs/2022/02/198b948ebd0c2e67.png')  -105px -175px",
        "position": "-40px -280px",
        "url": "https://www.quora.com/search?q="
    }]
};


`

// 5. 邮箱favicon

{/* <img data-src="https://f.start.me/weqihang.cn" class="lozad img-circle" width="40"> */}

// 执行计划

window.onload=function(){
    addWeQr();
    changeLogoLink();
    changeSearchIconLink();
}
// changeSearchIconLink(); 触发时间太晚，已完成页面渲染