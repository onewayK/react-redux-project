import {useEffect, useState} from "react";
import data from "../data/data.json";


function ReqDustData() {
    const [dustData, setDustData] = useState([]);
    // API 호출을 위한 Parameters
    const params = {
        serviceKey: "poT8XTWa3PxnArFI7PX+V8eachOraEIAUsOxAItIGYD8a4cfW2u3Klm7tiOLGUAxUo+hduGtRraQvD5KahJSFw==",
        returnType: "json",
        sidoName: "전국",
        numOfRows: '654'
    };

    useEffect(() => {
        // API URL
        const apiUrl = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

        // API 파라미터 인코딩
        const queryString = new URLSearchParams(params).toString();

        // API 호출 문자열 생성
        const urlWithParams = `${apiUrl}?${queryString}`;

        // API 호출
        fetch(urlWithParams)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setDustData(data.response.body.items);
            });
    }, []);

    return dustData;
}

export default ReqDustData;