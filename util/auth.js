const AUTH_URL = 'http://127.0.0.1:8181/api/auth';

//async + await
const authenticate = async (email, password) => {
  const url = AUTH_URL + 'signin';
  const res = await fetch(url, {
    //객체
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result = await res.json();
  console.log('로그인 결과', result);

  return result.token; //@@@
};

//기본스타일로 export
//export default authenticate;

//이름을 바꿔서 리턴 :
export function login(email, password) {
  return authenticate(email, password);
}

//npm install @react-native-async-storage/async-storage
//모바일 전용 토큰 저장 = localStorage
