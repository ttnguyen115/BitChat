import { Col } from 'antd';
import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase, { auth } from '../../api/firebase';
import { addDocument } from '../../api/services';
import { setLoading, setUser } from '../../features/user/userSlice';
import { useAppDispatch } from './../../app/hooks';
import { ButtonStyled, RowStyled, TitleStyled } from './LoginStyles';

const ggProvider = new firebase.auth.GoogleAuthProvider();

const Login: FC = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const handleGgLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(ggProvider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user!.displayName,
                email: user!.email,
                photoURL: user!.photoURL,
                uid: user!.uid,
                providerId: additionalUserInfo.providerId
            });
        }
    }

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                dispatch(setLoading());
                dispatch(setUser({ displayName, email, uid, photoURL }));
                history.push('/');
                return;
            }

            history.push('/login');
        }); 

        // Clean Func
        return () => unsubscribed();
    }, [history, dispatch]);

    return (
        <div>
            <RowStyled>
                <Col span={8}>
                    <TitleStyled style={{ textAlign: 'center' }} level={3}>BitChat</TitleStyled>

                    <ButtonStyled style={{ width: '100%' }} onClick={handleGgLogin}>Login with Google</ButtonStyled>
                </Col>
            </RowStyled>
        </div>
    )
}

export default Login
