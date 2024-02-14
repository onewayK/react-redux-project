import {Row, Col, Card } from "antd";
const setColorByCount = (count) => {
    if (count > 150) return "#ef5350";  // 매우나쁨
    if (count > 81) return "#ffd54f";   // 나쁨
    if (count > 30) return "#81c784";   // 보통
    if (count > 0) return "#64b5f6";   // 좋음
    else return "#e0e0e0";              // 데이터없음
}

const setDescByCount = (count) => {
    if (count > 150) return "매우나쁨";  // 매우나쁨
    if (count > 81) return "나쁨";   // 나쁨
    if (count > 30) return "보통";   // 보통
    if (count > 0) return "좋음";   // 좋음
    else return "데이터 없음";              // 데이터없음
}

const DustCard = ({ dustData, sidoName, setFavorite, favorites }) => {

    const { Meta } = Card;

    // 즐겨찾기 선택 시 redux에서 state 변경
    const favoriteEvent = (e) => {
        const favorite_data = e.target.dataset.value;
        if(favorites.includes(favorite_data)) { // 즐겨찾기 제거
            const removeIdx = favorites.indexOf(favorite_data);
            favorites.splice(removeIdx, 1);
            alert("즐겨찾기가 해제되었습니다.");
            e.target.text = "☆"
        } else {    // 즐겨찾기 추가
            favorites.push(favorite_data);
            alert("즐겨찾기가 등록되었습니다.");
            e.target.text = "★"
        }
        // redux state 변경
        setFavorite({type: 'SET_FAVORITE', favorites: favorites});
    }

    const dustCard = dustData.map((item) => {
        // 미세먼지 데이터별 색상 변경
        let dustColor = setColorByCount(item.pm10Value);
        // 미세먼지 데이터별 상태 변경
        let dustDesc = setDescByCount(item.pm10Value);
        return (
            <Col span={6}>
                <Card
                    type={"inner"}
                    key={item.stationName}
                    title={"[" + item.sidoName + "] " + item.stationName}
                    extra={
                    <a href="#" onClick={favoriteEvent} data-value={item.stationName}>
                        {favorites.includes(item.stationName) ?
                        "★" : "☆"
                        }
                    </a>
                    }
                    style={{margin: '1px 1px 10px 1px'}}
                >

                    <Meta
                        avatar={<p style={{color: dustColor}}>●</p>}
                        title={item.pm10Value !== "-" ? item.pm10Value + '㎍/㎥': item.pm10Value}
                        description={dustDesc}
                        />
                </Card>
            </Col>
        )
    })

    return (
        <Card
            title={sidoName}
            style={{margin: '10px 10px 10px 10px'}}
        >
            <Row
                gutter={16}
                style={{
                    maxHeight: "740px",
                    minHeight: "740px",
                    overflow: "auto",
                }}
            >
            {dustCard.length > 0 ? dustCard :
                <Col span={24}>
                    <Card
                        type={"inner"}
                        key={"nodata"}
                        title={"NoData"}
                        style={{
                            margin: '1px 1px 10px 1px',
                            minHeight: "720px"
                        }}
                    >
                        데이터가 없습니다.
                    </Card>
                </Col>
            }

            </Row>
        </Card>
    );
}

export default DustCard;