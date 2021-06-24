const description = { "PM25": "초미세먼지농도(㎍/㎥)", "PM10": "미세먼지(㎍/㎥)", "SO2": "아황산가스농도(ppm)", "IDEX_MVL": "통합대기환경지수", "NO2": "이산화질소농도(ppm)", "IDEX_NM": "통합대기환경등급", "MSRDT": "측정일시", "MSRRGN_NM": "권역명", "CO": "일산화탄소농도(ppm)", "O3": "오존(ppm)", "ARPLT_MAIN": "지수결정물질", "MSRSTE_NM": "측정소명" }

const datas = [
    { "co": 0.4, "so2": 0.003, "msrrgn_nm": "도심권", "idex_mvl": "59", "o3": 0.033, "no2": 0.019, "idex_nm": "보통", "pm10": 24, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 16, "msrste_nm": "중구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "도심권", "idex_mvl": "61", "o3": 0.038, "no2": 0.012, "idex_nm": "보통", "pm10": 160, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 20, "msrste_nm": "종로구" },
    { "co": 0.2, "so2": 0.003, "msrrgn_nm": "도심권", "idex_mvl": "62", "o3": 0.033, "no2": 0.005, "idex_nm": "보통", "pm10": 28, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 19, "msrste_nm": "용산구" },
    { "co": 0.2, "so2": 0.002, "msrrgn_nm": "서북권", "idex_mvl": "57", "o3": 0.038, "no2": 0.007, "idex_nm": "좋음", "pm10": 18, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 18, "msrste_nm": "은평구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "서북권", "idex_mvl": "57", "o3": 0.038, "no2": 0.006, "idex_nm": "보통", "pm10": 18, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 10, "msrste_nm": "서대문구" },
    { "co": 0.3, "so2": 0.002, "msrrgn_nm": "서북권", "idex_mvl": "59", "o3": 0.038, "no2": 0.008, "idex_nm": "보통", "pm10": 27, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 18, "msrste_nm": "마포구" },
    { "co": 0.3, "so2": 0.004, "msrrgn_nm": "동북권", "idex_mvl": "59", "o3": 0.024, "no2": 0.010, "idex_nm": "보통", "pm10": 25, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 19, "msrste_nm": "광진구" },
    { "co": 0.2, "so2": 0.005, "msrrgn_nm": "동북권", "idex_mvl": "62", "o3": 0.034, "no2": 0.003, "idex_nm": "보통", "pm10": 31, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 19, "msrste_nm": "성동구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "동북권", "idex_mvl": "59", "o3": 0.034, "no2": 0.009, "idex_nm": "좋음", "pm10": 35, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 18, "msrste_nm": "중랑구" },
    { "co": 0.2, "so2": 0.003, "msrrgn_nm": "동북권", "idex_mvl": "56", "o3": 0.037, "no2": 0.009, "idex_nm": "좋음", "pm10": 25, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 14, "msrste_nm": "동대문구" },
    { "co": 0.3, "so2": 0.002, "msrrgn_nm": "동북권", "idex_mvl": "52", "o3": 0.032, "no2": 0.012, "idex_nm": "좋음", "pm10": 40, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 11, "msrste_nm": "성북구" },
    { "co": 0.2, "so2": 0.002, "msrrgn_nm": "동북권", "idex_mvl": "56", "o3": 0.036, "no2": 0.004, "idex_nm": "좋음", "pm10": 16, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 14, "msrste_nm": "도봉구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "동북권", "idex_mvl": "62", "o3": 0.032, "no2": 0.009, "idex_nm": "나쁨", "pm10": 90, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 23, "msrste_nm": "강북구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "동북권", "idex_mvl": "57", "o3": 0.038, "no2": 0.006, "idex_nm": "보통", "pm10": 19, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 18, "msrste_nm": "노원구" },
    { "co": 0.3, "so2": 0.004, "msrrgn_nm": "서남권", "idex_mvl": "62", "o3": 0.044, "no2": 0.011, "idex_nm": "보통", "pm10": 100, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 21, "msrste_nm": "강서구" },
    { "co": 0.2, "so2": 0.003, "msrrgn_nm": "서남권", "idex_mvl": "57", "o3": 0.038, "no2": 0.008, "idex_nm": "보통", "pm10": 27, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 9, "msrste_nm": "구로구" },
    { "co": 0.4, "so2": 0.003, "msrrgn_nm": "서남권", "idex_mvl": "61", "o3": 0.040, "no2": 0.015, "idex_nm": "보통", "pm10": 30, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 22, "msrste_nm": "영등포구" },
    { "co": 0.1, "so2": 0.002, "msrrgn_nm": "서남권", "idex_mvl": "62", "o3": 0.035, "no2": 0.010, "idex_nm": "보통", "pm10": 159, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 24, "msrste_nm": "동작구" },
    {
        "co": 0.3, "so2": 0.003, "msrrgn_nm": "서남권", "idex_mvl": "61", "o3": 0.042, "no2": 0.012, "idex_nm": "매우나쁨", "pm10": 151, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 15, "msrste_nm": "관악구"
    },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "서남권", "idex_mvl": "61", "o3": 0.042, "no2": 0.007, "idex_nm": "보통", "pm10": 26, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 20, "msrste_nm": "금천구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "서남권", "idex_mvl": "61", "o3": 0.041, "no2": 0.011, "idex_nm": "보통", "pm10": 25, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 22, "msrste_nm": "양천구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "동남권", "idex_mvl": "62", "o3": 0.032, "no2": 0.015, "idex_nm": "보통", "pm10": 30, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 22, "msrste_nm": "강남구" },
    { "co": 0.3, "so2": 0.002, "msrrgn_nm": "동남권", "idex_mvl": "56", "o3": 0.036, "no2": 0.012, "idex_nm": "나쁨", "pm10": 85, "msrdt": "202008261300", "arplt_main": "O3", "pm25": 14, "msrste_nm": "서초구" },
    { "co": 0.3, "so2": 0.003, "msrrgn_nm": "동남권", "idex_mvl": "63", "o3": 0.029, "no2": 0.010, "idex_nm": "보통", "pm10": 25, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 18, "msrste_nm": "송파구" },
    { "co": 0.2, "so2": 0.002, "msrrgn_nm": "동남권", "idex_mvl": "61", "o3": 0.021, "no2": 0.014, "idex_nm": "나쁨", "pm10": 81, "msrdt": "202008261300", "arplt_main": "PM25", "pm25": 17, "msrste_nm": "강동구" }
]




// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
// }

const parentUL = document.createElement('ul');

const { PM25, PM10, MSRSTE_NM, MSRRGN_NM, IDEX_NM } = description;

const isBad = (pm10) => {
    let airCond;
    if (pm10 <= 30) {
        airCond = "좋음";
    } else if (pm10 <= 80 && pm10 > 30) {
        airCond = "보통";
    } else if (pm10 <= 150 && pm10 > 80) {
        airCond = "나쁨";
    } else {
        airCond = "매우나쁨";
    }
    return airCond;
}

for (let data of datas) {
    const { idex_nm, pm10, pm25, msrste_nm } = datas;
    // console.log(data.msrste_nm, data.idex_nm, data.pm10, data.pm25);
    console.log(data.pm10)
    const childLI = document.createElement('li');
    childLI.innerText = `${MSRSTE_NM}:${data.msrste_nm} / ${PM10}:${data.pm10} / ${IDEX_NM}:${isBad(data.pm10)}`;
    childLI.classList.add(isBad(data.pm10));

    parentUL.appendChild(childLI);
}


// append them to the body
document.body.prepend(parentUL);