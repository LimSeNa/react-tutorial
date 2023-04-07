// 서버에 API 요청을 보내는 부분
import client from "./client";

// 회원가입에 대한 API 요청을 보내는 함수
export const signup = ({email, password, nickname}) => client.post("/api/auth/signup", {
    email, password, nickname
});