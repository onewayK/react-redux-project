import './App.css';
import React, {useState} from "react";
import {Row, Col,  Select, Spin, Alert, Segmented} from "antd";
// import data from './data/data.json';
import ReqDustData from "./components/ReqDustData";
import DustCard from "./components/DustCard";

function App({ dispatch, value, setFavorite}) {

    const [sidoName, setSidoName] = useState("서울");
    const [selectedSido, setSelectedSido] = useState("서울");
    const [favorites, setFavorites] = useState([])

    const sidoList = [
        {sidoName: "서울"}, {sidoName: "부산"}, {sidoName: "대구"}, {sidoName: "인천"}, {sidoName: "광주"}, {sidoName: "대전"}, {sidoName: "울산"}, {sidoName: "경기"}, {sidoName: "강원"}, {sidoName: "충북"}, {sidoName: "충남"}, {sidoName: "전북"}, {sidoName: "전남"}, {sidoName: "경북"}, {sidoName: "경남"}, {sidoName: "제주"}, {sidoName: "세종"}
    ]

    const dustData = ReqDustData();

    const getDustData = (sido) => {
        setSidoName(sido);
        setSelectedSido(sido);
    }

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

    const handleFavorite = (e) => {
        favorites.push(e.target.dataset.value);
        dispatch({type: 'SET_FAVORITE', favorites: favorites});
        setFavorite(favorites);
    }

    return (
        <>
            <Select
                id={"sidoSelect"}
                onChange={getDustData}
                defaultValue={"서울"}
                style={{
                    width: 200,
                    margin: "10px 10px 10px 10px"
                }}
                disabled={sidoName === "전국"}
            >
                {
                    sidoList.map((item) => {
                        return <Select.Option key={item.sidoName} value={item.sidoName}>{item.sidoName}</Select.Option>
                    })
                }
            </Select>

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
                                    if(favorites.includes(item.stationName)) {
                                        return item;
                                    }
                                }).filter(data => data !== undefined)}
                                sidoName={"즐겨찾기"}
                                setFavorite={handleFavorite}
                            /> :
                            <DustCard
                                dustData={dustData.filter(data => data.sidoName === sidoName)}
                                sidoName={sidoName}
                                addFavorite={handleFavorite}
                            /> :
                        <DustCard
                            dustData={dustData}
                            sidoName={"전국"}
                            addFavorite={handleFavorite}
                        />
            }

            <Segmented
                options={["지역별", "전국", "즐겨찾기"]}
                block
                onChange={setOptions}
            />


            {/*<div style={{"marginTop": "100px"}}>*/}
            {/*    <Row justify={"center"}>*/}
            {/*        <Col span={9}>*/}
            {/*            <KoreanMap*/}
            {/*                dustData={dustData}*/}
            {/*                sidoList={sidoList}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*        <Col span={13}>*/}
            {/*            <FineDust*/}
            {/*                rawData={dustData}*/}
            {/*                sidoList={sidoList}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
        </>
    );
}
//
// const mapStateToProps = (state) => ({
//     favorites: state.favorites,
// })
//
// const mapDispatchToProps = {
//     toggleFavorite,
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
