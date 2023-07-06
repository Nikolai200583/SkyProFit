import { useNavigate } from 'react-router-dom';
import * as Styled from './StylesForm';


export const LoginForm = () => {
      
    const navigate = useNavigate();

    const handleLogin = () => { 
    navigate('/')
}
    
    function handleRegistration() {
        navigate('/registration');
    }

    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                {/* <Logo image="img/logoBlack.png" /> */}
                <Styled.LoginInput type="email" 
                placeholder="Email" />
                <Styled.PasswordInput type="password"
                placeholder="Пароль"/>
                <Styled.Navigation>
                    <Styled.BtnEnter onClick={handleLogin}>
                        Войти
                    </Styled.BtnEnter>
                    <Styled.BtnRegistration onClick={handleRegistration}>
                        Зарегистрироваться
                    </Styled.BtnRegistration>
                </Styled.Navigation>
            </Styled.LoginForms>
        </Styled.ContainerLoginForm>
    );
};