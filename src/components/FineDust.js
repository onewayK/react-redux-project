import React, { useState } from "react";
import Select from "./common/Select";

const FinestDust = ({rawData}) => {
    const [sidoData, setSidoData ] = useState('');
    const [ dustData, setDustData ] = useState(Array());
    const getSidoName = () => {
        let sidoName = rawData.map((item) => {
            return item.sidoName
        });

        return [... new Set(sidoName)]
    }

    const getDustData = (e) => {
        let sidoData = e.target.value;
        let dustData = rawData.filter(data => data.sidoName === sidoData);
        setDustData(dustData);
    }


    return (
        <div>
            <div>
                <Select
                    id={"sidoName"}
                    name={"sidoName"}
                    onChange={getDustData}
                    optionData={getSidoName()}
                />
            </div>
            <div>
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
                            return (<tr key={index}>
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
        </div>
    );
}

export default FinestDust;