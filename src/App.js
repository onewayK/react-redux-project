import './App.css';
import React, {useState, useEffect} from "react";
import { Row, Col } from "antd";
import KoreanMap from "./components/KoreanMap"; // KoreanMap Component
import FineDust from "./components/FineDust";
import data from './data/data.json';
import ReqDustData from "./components/ReqDustData";

function App() {

    const sidoList = [
        {
            sidoName: "전국",
            sidoFullName: "전국"
        },
        {
            sidoName: "서울",
            sidoFullName: "서울특별시"
        }, {
            sidoName: "부산",
            sidoFullName: "부산광역시"
        }, {
            sidoName: "대구",
            sidoFullName: "대구광역시"
        }, {
            sidoName: "인천",
            sidoFullName: "인천광역시"
        }, {
            sidoName: "광주",
            sidoFullName: "광주광역시"
        }, {
            sidoName: "대전",
            sidoFullName: "대전광역시"
        }, {
            sidoName: "울산",
            sidoFullName: "울산광역시"
        }, {
            sidoName: "경기",
            sidoFullName: "경기도"
        }, {
            sidoName: "강원",
            sidoFullName: "강원도"
        }, {
            sidoName: "충북",
            sidoFullName: "충청북도"
        }, {
            sidoName: "충남",
            sidoFullName: "충청남도"
        }, {
            sidoName: "전북",
            sidoFullName: "전라북도"
        }, {
            sidoName: "전남",
            sidoFullName: "전라남도"
        }, {
            sidoName: "경북",
            sidoFullName: "경상북도"
        }, {
            sidoName: "경남",
            sidoFullName: "경상남도"
        }, {
            sidoName: "제주",
            sidoFullName: "제주특별자치도"
        }, {
            sidoName: "세종",
            sidoFullName: "세종특별자치시"
        }
    ]

    const dustData = ReqDustData();

    return (
        <>
            <div style={{"marginTop": "100px"}}>
                <Row justify={"center"}>
                    <Col span={9}>
                        <KoreanMap
                            dustData={dustData}
                            sidoList={sidoList}
                        />
                    </Col>
                    <Col span={13}>
                        <FineDust
                            rawData={dustData}
                            sidoList={sidoList}
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default App;
