import { SimpleSouthKoreaMapChart } from "react-simple-south-korea-map-chart";
const KoreanMapChart = ({dustData, sidoList}) => {

    // initialize mapData
    let mapData = {};

    // merge dustData and sidoList
    sidoList.map((item) => {
        mapData[item.sidoFullName] = dustData.map((item2) => {
            if (item2.sidoName === item.sidoName) {
                return item2.pm10Value;
            }
        }).filter(data => data !== undefined)
    })

    // set mapData
    Object.keys(mapData).map((item) => {
        let dustCount = 0;
        // check if dustCount is exist in map
        if (mapData[item].length > 0) {
            // if dustCount exists then calculate the average of dustCount
            for(let i = 0; i < mapData[item].length; i++) {
                dustCount += mapData[item][i];
            }
            mapData[item] = dustCount % mapData[item].length;
        } else {
            mapData[item] = 0;
        }

    })

    // set map data
    const data = Object.keys(mapData).map((item, index) => {
        return {
            locale: item,
            count: mapData[item]
        }
    })

    // set map color
    const setColorByCount = (count) => {
        if (count > 0) return "#d0ecff";   // 좋음
        if (count > 150) return "#ffd6da";  // 매우나쁨
        if (count > 81) return "#f8f7c6";   // 나쁨
        if (count > 30) return "#caf2de";   // 보통
        else return "#cbd0d3";              // 데이터없음
    }

    return (
        <SimpleSouthKoreaMapChart
            data={data}
            setColorByCount={setColorByCount}
            unit={"㎍/㎥"}
        />
    )
}

export default KoreanMapChart;