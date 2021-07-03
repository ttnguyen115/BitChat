import { Avatar, Button, Typography } from 'antd';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../../api/firebase';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { logoutUser } from '../../../features/user/userSlice';

const UserInfo: FC = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const userInfo = useAppSelector((state: RootState) => state.user.data);

    const handleSignout = () => {
        auth.signOut();
        dispatch(logoutUser());
        history.push('/login');
    }

    return (
        <WrapperStyled>
            <div>
                <Avatar src={userInfo!.photoURL}>
                    { userInfo!.photoURL ? '' : userInfo!.displayName?.charAt(0)?.toUpperCase() }
                </Avatar>
                
                <Typography.Text className="username">{userInfo!.displayName}</Typography.Text>
            </div>

            <Button ghost onClick={handleSignout}>Logout</Button>
        </WrapperStyled>
    )
}

export default UserInfo

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .username {
        color: white;
        margin-left: 5px;
    }
`;

