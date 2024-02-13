import {Row, Col, Card, Collapse} from "antd";
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



const DustCard = ({ dustData, sidoName, addFavorite }) => {

    console.log(dustData);
    const { Meta } = Card;

    let rowCnt = 0;

    const dustCard = dustData.map((item) => {
        // sidoName = item.sidoName;
        let dustColor = setColorByCount(item.pm10Value);
        let dustDesc = setDescByCount(item.pm10Value);
        return (
            <Col span={6}>
                <Card
                    type={"inner"}
                    key={item.stationName}
                    title={"[" + item.sidoName + "] " + item.stationName}
                    extra={<a href="#" onClick={addFavorite} data-value={item.stationName}>★☆</a>}
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
            {dustCard}
            </Row>
        </Card>
    );
}

export default DustCard;