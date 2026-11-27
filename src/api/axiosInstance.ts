// 환병변수라는 건 프로그램 바깥의 파일임 <- 프로그램 실행 자체와는 관련 없음//
import * as axios from "axios"

const BASE_URL =import.meta.env.BASE_URL || "";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
});


export default api
