import { StyleSheet, View } from 'react-native';
import Input from '../ui/Input';
import { useState } from 'react';
import Button from '../ui/Button';

const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }) => {
  // (AuthContent에서)T/F 넘어옴, onSubmt 넘어옴
  //reducer로 처리 가능
  const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEneteredName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredComfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsValid,
    name: nameIsValid,
    password: passwordIsValid,
    confirmPassword: passwordDontMatch,
  } = credentialsInvalid;

  //reducer로 처리 가능
 const updateInputValueHandler = (inputType, enteredValue) => {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'name':
        setEneteredName(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  };

  const submitHandler = () => {
    console.log('버튼 클릭됨! submit');
    //사용자의 입력 상태값을 객체로 포장해서 AuthContet에게 넘김
    //->부모쪽에서 유효성 검증 함
    onSubmit({
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  };

  return (
    <View>
      <View>
        <Input
          label='이메일주소'
          keyboardType='email-address'
          //bind()는 표준 javaScript 함수로, 나중에 실행할 함수를 미리 조정할 수 있게 함
          //bind에 제공되는 첫번째 인수는 곧 실행할 함수의 this 키워드로 설정
          //두번째 인수는 지정한 함수에 전달할 값을 세팅하면 됨
          //bind 어디서 호출했는지 알려줌 : 지금 여기가 어딘지
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          isInvalid={emailIsValid}
          value={enteredEmail}
        />
        {!isLogin && (
          <Input
            label='이름'
            onUpdateValue={updateInputValueHandler.bind(this, 'name')}
            isInvalid={nameIsValid}
            value={enteredName}
          />
        )}
        <Input
          label='비밀번호'
          secure
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          isInvalid={passwordIsValid}
          value={enteredPassword}
        />
        {!isLogin && (
          <Input
            label='비밀번호확인'
            secure
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword',
            )}
            isInvalid={passwordDontMatch}
            value={enteredComfirmPassword}
          />
        )}
        {/* key와 value 같을 시 생략 가능 */}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? '로그인' : '회원 가입'}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
