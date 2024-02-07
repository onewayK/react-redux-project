import './App.css';
import jsonData from './data/data.json';
import React, {useState} from "react";
import Select from "./components/common/Select";

const rawData = jsonData.response.body.items;

function App() {
    const [sidoData, setSidoData ] = useState('');
    const [ stationList, setStationList ] = useState(Array());
    const [ dustData, setDustData ] = useState(Array());
    const getSidoName = () => {
        let sidoName = rawData.map((item) => {
            return item.sidoName
        });

        return [... new Set(sidoName)]
    }

    const getStationName = (e) => {
        let sido = e.target.value;
        let stationName = rawData.map((item) => {
            if (item.sidoName === sido) {
                return item.stationName
            }
        }).filter(data => data !== undefined);
        setStationList([... new Set(stationName)])
        setSidoData(sido);
        setDustData([]);
    }

    const getDustData = (e) => {
        let dustData = rawData.filter(data => data.sidoName === sidoData && data.stationName === e.target.value);
        setDustData(dustData);
    }


    return (
        <div>
            <Select
                id={"sidoName"}
                name={"sidoName"}
                onChange={getStationName}
                optionData={getSidoName()}
            />
            <Select
                id={"stationName"}
                name={"stationName"}
                onChange={getDustData}
                optionData={stationList}
            />
            <table style={{border: '1px solid black', width: '80%'}}>
                <tr>
                    <th>아황산가스 지수</th>
                    <th>일산화탄소 플래그</th>
                    <th>통합대기환경수치</th>
                    <th>아황산가스 농도</th>
                    <th>일산화탄소 농도</th>
                    <th>초미세먼지(PM2.5) 플래그</th>
                    <th>미세먼지(PM10) 플래그</th>
                    <th>오존 지수</th>
                    <th>미세먼지(PM10) 농도</th>
                    <th>통합대기환경지수</th>
                    <th>초미세먼지(PM2.5) 농도</th>
                    <th>시도명</th>
                    <th>이산화질소 플래그</th>
                    <th>측정일시</th>
                    <th>일산화탄소 지수</th>
                    <th>이산화질소 농도</th>
                    <th>측정소명</th>
                    <th>미세먼지(PM10) 24시간 등급자료</th>
                    <th>오존 농도</th>
                </tr>
                {
                    dustData.map((item, index) => {
                        console.log(item);
                        return (<tr>
                            <td>{item.so2Grade}</td>
                            <td>{item.coFlag}</td>
                            <td>{item.khaiValue}</td>
                            <td>{item.so2Value}</td>
                            <td>{item.coValue}</td>
                            <td>{item.pm25Flag}</td>
                            <td>{item.pm10Flag}</td>
                            <td>{item.o3Grade}</td>
                            <td>{item.pm10Value}</td>
                            <td>{item.khaiGrade}</td>
                            <td>{item.pm25Value}</td>
                            <td>{item.sidoName}</td>
                            <td>{item.no2Flag}</td>
                            <td>{item.dataTime}</td>
                            <td>{item.coGrade}</td>
                            <td>{item.no2Value}</td>
                            <td>{item.stationName}</td>
                            <td>{item.pm10Grade}</td>
                            <td>{item.o3Value}</td>
                        </tr>)
                    })
                }
            </table>
        </div>
    );
}

/**
 * "so2Grade": "1",
 *           "coFlag": null,
 *           "khaiValue": "56",
 *           "so2Value": "0.002",
 *           "coValue": "0.3",
 *           "pm25Flag": null,
 *           "pm10Flag": null,
 *           "o3Grade": "2",
 *           "pm10Value": "14",
 *           "khaiGrade": "2",
 *           "pm25Value": "5",
 *           "sidoName": "서울",
 *           "no2Flag": null,
 *           "no2Grade": "1",
 *           "o3Flag": null,
 *           "pm25Grade": "1",
 *           "so2Flag": null,
 *           "dataTime": "2022-05-09 10:00",
 *           "coGrade": "1",
 *           "no2Value": "0.019",
 *           "stationName": "중구",
 *           "pm10Grade": "1",
 *           "o3Value": "0.037"
 */

export default App;
