"use strict"    // 엄격 모드

// 일별 박스오피스에서
// 2021년 11월 1일에 관객수가 2000 이상이고
// 상영된 횟수가 홀수인 영화만 출력해주세요!
const baseURL = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
const keyValue = "45434acf491bc75490d903ddbcb7e67d"
var targetDate = 20211101;


const dateElement = document.getElementById("calender");
const btnElement = document.getElementById("btn");
const drawInfoElement = document.getElementById("draw-info");
const img = ["https://movie-phinf.pstatic.net/20210915_104/1631681279096sdjNA_JPEG/movie_image.jpg",
                "https://movie-phinf.pstatic.net/20211013_124/1634113091609idAKj_JPEG/movie_image.jpg",
                "https://movie-phinf.pstatic.net/20210831_152/1630371935224qy9s6_JPEG/movie_image.jpg"];
const poster = ["https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1034057_16357473724834722.jpg",
                "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDZfMzYg%2FMDAxNjM2MjA5OTE0Nzc1.h2f1UYLiRPi5OtfPzNU-NUxuaPwjykT5UdVoD1OFUH0g.Ym1cGCBWzeQu1GSh4pC9SBQ1N6yM-No28SGmjJ7CszUg.JPEG.urjj%2FIMG_1326.jpg&type=sc960_832",
                "https://movie-phinf.pstatic.net/20210812_250/1628729731779sqakv_JPEG/movie_image.jpg?type=m886_590_2"];

let today = new Date();
// console.log(today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate()); 
// console.log(today.toLocaleDateString());
// let todayYMD = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();

let dat = new Date("2021/05/01");
let overDate = new Date();

function date(){
    overDate.setDate(today.getDate() - 1);
    let year = overDate.getFullYear();
    let month = ("00"+(overDate.getMonth()+1).toString()).slice(-2);
    let date = ("00"+overDate.getDate().toString()).slice(-2);
    // console.log("year: " + year + ", month: " + month + ", date: " + date);
    dateElement.value =  year+ "-" + month + "-" + date;

    // console.log(targetDate);
    targetDate = year + month + date;
};

btnElement.addEventListener("click", () => {
    
    
    if(dateElement.value === ""){
        date();

        movieChart();

    }else{
        if(Date.parse(dateElement.value) > today){
            alert("선택하신 날짜에 대한 영화 정보가 없습니다.");
            
            date();

            movieChart();

        } else{
            let calDate = dateElement.value;
            let [year2, month2, date2] = calDate.split('-');
            month2 = ("00"+month2).slice(-2);
            date2 = ("00"+date2).slice(-2);
            dateElement.value =  year2+ "-" + month2 + "-" + date2;
        
            targetDate = year2+month2+date2;

            movieChart();
        }
    }
});


function movieChart(){
    axios.get(baseURL, {
        params: {
            key: keyValue,
            targetDt: targetDate
        }
    }).then(response => response.data)
    .then((data) => 
        data.boxOfficeResult.dailyBoxOfficeList.filter(
            (el) => (el.audiCnt >= 2000) && (el.showCnt % 2 === 1)

        )
    ).then(result => {
        console.log(result);
        drawInfoElement.innerHTML = ``;
        result.forEach((element, index) => {
            console.log("img: " + img);
            console.log("poster: " + poster);
            drawInfoElement.innerHTML += 
                `
                <div class="col-md-4">
                    <div class="main">
                        <div class="movie-img">
                            <img src= "${img[index]}"
                                class="backimg">
                            <img class="movie-cover"
                                src= "${poster[index]}">
                            <i class="fa fa-play"></i>
                        </div>
                        <!-- 영화제목 movieNm -->
                        <div class="movie-title">${element.movieNm}</div>
                        <!-- 영화정보 -->
                        <div class="movie-info-head text-center">
                            <!-- rankOldAndNew -->
                            <p>Status</p>
                            <!-- rank -->
                            <p>Rank</p>
                            <!-- scrnCnt -->
                            <p>Screens</p>
                            <!-- showCnt -->
                            <p>Show</p>
                        </div>
                        <div class="movie-info-content text-center">
                            <!-- rankOldAndNew -->
                            <p>${element.rankOldAndNew}</p>
                            <!-- rank -->
                            <p>${element.rank}</p>
                            <!-- scrnCnt -->
                            <p>${element.scrnCnt}</p>
                            <!-- showCnt -->
                            <p>${element.showCnt}</p>
                        </div>
                    </div>
                </div>
                `;
        });
        
    });
};

// movieChart();
