import './App.css';
import React, {useState} from "react";
import { Select, Spin, Alert, Segmented } from "antd";
// import data from './data/data.json';
import ReqDustData from "./components/ReqDustData";
import DustCard from "./components/DustCard";

function App({ value, setFavorite }) {

    // state 생성
    const [sidoName, setSidoName] = useState("서울");             // 선택된 시도
    const [selectedSido, setSelectedSido] = useState("서울");     // Selected 된 시도

    // 시도 목록
    const sidoList = [
        {sidoName: "서울"}, {sidoName: "부산"}, {sidoName: "대구"}, {sidoName: "인천"}, {sidoName: "광주"}, {sidoName: "대전"}, {sidoName: "울산"}, {sidoName: "경기"}, {sidoName: "강원"}, {sidoName: "충북"}, {sidoName: "충남"}, {sidoName: "전북"}, {sidoName: "전남"}, {sidoName: "경북"}, {sidoName: "경남"}, {sidoName: "제주"}, {sidoName: "세종"}
    ]

    // API 호출
    const dustData = ReqDustData();

    // 시도 변경 시 해당 시도에 대한 미세먼지 데이터 출력 되도록 state 변경
    const getDustData = (sido) => {
        setSidoName(sido);
        setSelectedSido(sido);
    }

    // 지역별인 경우 select 박스의 시도 적용 그 외의 경우 화면 하단 탭 데이터 적용
    const setOptions = (value) => {
        switch (value) {
            case "지역별" :
                setSidoName(selectedSido);
                break;
            default:
                setSidoName(value);
                break;
        }
    }

    return (
        <>
            {/* Select 박스로 지역별인 경우에만 활성화 그 외 비활성화*/}
            <Select
                id={"sidoSelect"}
                onChange={getDustData}
                defaultValue={"서울"}
                style={{
                    width: 200,
                    margin: "10px 10px 10px 10px"
                }}
                disabled={sidoName === "전국" || sidoName === "즐겨찾기"}
            >
                {
                    sidoList.map((item) => {
                        return <Select.Option key={item.sidoName} value={item.sidoName}>{item.sidoName}</Select.Option>
                    })
                }
            </Select>
            {/*데이터 없는 경우 로딩바 출력 데이터 있는 경우 데이터 출력(탭별 다르게)*/}
            {
                dustData.length === 0
                    ? <Spin tip="Loading...">
                        <Alert
                            message="Loading..."
                            description="데이터를 불러오는 중입니다."
                            type="info"
                            style={{minHeight: '840px'}}
                        />
                    </Spin>
                    :
                    sidoName !== '전국' ?
                        sidoName === "즐겨찾기" ?
                            <DustCard
                                dustData={dustData.map((item) =>{
                                    if(value.includes(item.stationName)) {
                                        return item;
                                    }
                                }).filter(data => data !== undefined)}
                                sidoName={"즐겨찾기"}
                                setFavorite={setFavorite}
                                favorites={value}
                            /> :
                            <DustCard
                                dustData={dustData.filter(data => data.sidoName === sidoName)}
                                sidoName={sidoName}
                                setFavorite={setFavorite}
                                favorites={value}
                            /> :
                        <DustCard
                            dustData={dustData}
                            sidoName={"전국"}
                            setFavorite={setFavorite}
                            favorites={value}
                        />
            }

            {/*하단 탭 영역 선택 시 선택한 형식의 데이터 출력*/}
            <Segmented
                options={["지역별", "전국", "즐겨찾기"]}
                block
                onChange={setOptions}
            />
        </>
    );
}

export default App;
