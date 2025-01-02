import axios from "axios";

export function get(url,data) {
    console.log(axios);
    axios.get(url, data).then((res) => {
        console.log(res);
    });
}
