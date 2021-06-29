import { FC, useEffect } from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { auth } from '../../../api/firebase'
import { useHistory } from 'react-router-dom';
import { useAppSelector } from './../../../app/hooks';
import { RootState } from '../../../app/store';

const UserInfo: FC = () => {
    const history = useHistory();
    const userData = useAppSelector((state: RootState) => state.user.data);

    useEffect(() => {
        if (!userData) {
            history.push('/login');
        }
    }, [userData, history])

    const handleSignout = () => {
        auth.signOut();
        history.push('/login');
    }

    return (
        <WrapperStyled>
            <div>
                <Avatar>A</Avatar>
                <Typography.Text className="username">ABC</Typography.Text>
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

