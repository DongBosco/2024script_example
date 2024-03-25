// 변수
let map;
let cityCnt = 0;

const weaterAPI = "https://api.openweathermap.org/data/2.5/weather"
const params = {
    appid:"4eedfeb184dc7cb08af6c0bd529c48b9",
    units:"metric",
    lang:"kr"
};

const options={
    center : new kakao.maps.LatLng(37.55587, 126.97302),
    level : 13,
    draggable:false,
    zoomable:false,
    disableDoubleClick:true
};


function mapInit(){
    map = new kakao.maps.Map($("#map")[0], options);
    axios.get("./json/city.json").then(onGetCity);
};

function onCreateMarker(r){
    console.log(r.data.id);
    cityCnt++;    
    console.log(cityCnt);

    let city = cities.filter((v)=>{
        return v.id === r.data.id;
    });
    console.log(city);

    let content = 
    `<div class="layer">
    <div><img src="http://openweathermap.org/img/wn/${r.data.weather[0].icon}.png"></div>
    ${city[0].name}
    <div> ${r.data.main.temp}</div>
    </div>`
    let position = new kakao.maps.LatLng(r.data.coord.lat,r.data.coord.lon);

    var customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content : content
    });

    customOverlay.setMap(map);
};

function onGetCity(r){
    cities = r.data.cities;
    cities.forEach((item)=>{
        console.log(item.name)
        params.lat = "";
        params.long = "";
        params.id = item.id;

        axios.get(weaterAPI,{params}).then(onCreateMarker);
    })
};



// axios.get(url,params).then((res)=>{})

//실행부

mapInit()
