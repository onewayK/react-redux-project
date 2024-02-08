import React, { useState } from "react";
// import Select from "./common/Select";
import { Select, Table, Row, Col } from 'antd';

const FinestDust = ({rawData, sidoList}) => {
    const [sidoData, setSidoData ] = useState('');
    const [ dustData, setDustData ] = useState(rawData);
    const getSidoName = () => {
        let sidoName = rawData.map((item) => {
            return item.sidoName
        });

        return [... new Set(sidoName)]
    }

    const getDustData = (sidoName) => {
        if(sidoName === "전국") {
            setDustData(rawData);
        } else {
            let dustData = rawData.filter(data => data.sidoName === sidoName);
            setDustData(dustData);
        }
    }

    const columns = [
        {
            title: '시도명',
            dataIndex: 'sidoName',
            key: 'sidoName',
            width: '2%',
        }, {
            title: '측정소명',
            dataIndex: 'stationName',
            key: 'stationName',
            width: '4%',
        }, {
            title: '측정망 정보',
            dataIndex: 'mangName',
            key: 'mangName',
            width: '3%',
        }, {
            title: '측정일시',
            dataIndex: 'dataTime',
            key: 'dataTime',
            width: '4%',
        }, {
            title: '아황산가스 농도',
            dataIndex: 'so2Value',
            key: 'so2Value',
            width: '4%',
        }, {
            title: '일산화탄소 농도',
            dataIndex: 'coValue',
            key: 'coValue',
            width: '4%',
        }, {
            title: '오존 농도',
            dataIndex: 'o3Value',
            key: 'o3Value',
            width: '3%',
        }, {
            title: '이산화질소 농도',
            dataIndex: 'no2Value',
            key: 'no2Value',
            width: '4%',
        }, {
            title: '미세먼지(PM10) 농도',
            dataIndex: 'pm10Value',
            key: 'pm10Value',
            width: '4%',
        }, {
            title: '미세먼지(PM10) 24시간 예측이동농도',
            dataIndex: 'pm10Value24',
            key: 'pm10Value24',
            width: '4.5%',
        }, {
            title: '초미세먼지(PM2.5) 농도',
            dataIndex: 'pm25Value',
            key: 'pm25Value',
            width: '5%',
        }, {
            title: '초미세먼지(PM2.5) 농도24시간 예측이동농도',
            dataIndex: 'pm25Value24',
            key: 'pm25Value24',
            width: '4.5%',
        }, {
            title: '통합대기환경수치',
            dataIndex: 'khaiValue',
            key: 'khaiValue',
            width: '3.5%',
        }, {
            title: '통합대기환경지수',
            dataIndex: 'khaiGrade',
            key: 'khaiGrade',
            width: '3.5%',
        }, {
            title: '아황산가스 지수',
            dataIndex: 'so2Grade',
            key: 'so2Grade',
            width: '3.5%',
        }, {
            title: '일산화탄소 지수',
            dataIndex: 'coGrade',
            key: 'coGrade',
            width: '3.5%',
        }, {
            title: '오존 지수',
            dataIndex: 'o3Grade',
            key: 'o3Grade',
            width: '2.5%',
        }, {
            title: '이산화질소 지수',
            dataIndex: 'no2Grade',
            key: 'no2Grade',
            width: '3.5%',
        }, {
            title: '미세먼지(PM10) 24시간 등급자료',
            dataIndex: 'pm10Grade',
            key: 'pm10Grade',
            width: '3.5%',
        }, {
            title: '초미세먼지(PM2.5) 24시간 등급자료',
            dataIndex: 'pm25Grade',
            key: 'pm25Grade',
            width: '4%',
        }, {
            title: '미세먼지(PM10) 1시간 등급자료',
            dataIndex: 'pm10Grade1h',
            key: 'pm10Grade1h',
            width: '3.3%',
        }, {
            title: '초미세먼지(PM2.5) 1시간 등급자료',
            dataIndex: 'pm25Grade1h',
            key: 'pm25Grade1h',
            width: '3.8%',
        }, {
            title: '아상산가스 플래그',
            dataIndex:'so2Flag',
            key:'so2Flag',
            width: '3.5%',
        }, {
            title: '일산화탄소 플래그',
            dataIndex: 'coFlag',
            key: 'coFlag',
            width: '3.5%',
        }, {
            title: '오존 플래그',
            dataIndex: 'o3Flag',
            key: 'o3Flag',
            width: '2.5%',
        }, {
            title: '이산화질소 플래그',
            dataIndex: 'no2Flag',
            key: 'no2Flag',
            width: '3.5%',
        }, {
            title: '미세먼지(PM10) 플래그',
            dataIndex: 'pm10Flag',
            key: 'pm10Flag',
            width: '3.2%',
        }, {
            title: '초미세먼지(PM2.5) 플래그',
            dataIndex: 'pm25Flag',
            key: 'pm25Flag',
            width: '3.2%',
        },
    ]


    return (
        <>
            <Row>
                <Col span={24} key={0}>
                    <Select
                        onChange={getDustData}
                        defaultValue={"전체"}
                        style={{ width: 200 }}
                    >
                        {
                            sidoList.map((item) => {
                                return <Select.Option key={item.sidoName} value={item.sidoName}>{item.sidoName}</Select.Option>
                            })
                        }
                    </Select>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col span={24} key={1}>
                    <Table dataSource={dustData} columns={columns} scroll={{x: 4000}} pagination={{pageSize: 8}}/>
                </Col>
            </Row>
        </>
    );
}

export default FinestDust;