import {useEffect, useState} from "react";
import data from "../data/data.json";


function ReqDustData() {
    const [dustData, setDustData] = useState([]);
    const params = {
        serviceKey: "poT8XTWa3PxnArFI7PX+V8eachOraEIAUsOxAItIGYD8a4cfW2u3Klm7tiOLGUAxUo+hduGtRraQvD5KahJSFw==",
        returnType: "json",
        sidoName: "전국",
        numOfRows: '654'
    };

    useEffect(() => {

        console.log("useEffect");

        const apiUrl = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

        const queryString = new URLSearchParams(params).toString();

        const urlWithParams = `${apiUrl}?${queryString}`;

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