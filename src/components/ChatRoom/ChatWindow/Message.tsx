import React, { FC } from 'react'
import { messageData } from '../../../features/types';
import { Avatar, Typography } from 'antd';
import styled from 'styled-components';

const Message: FC<messageData> = ({ text, displayName, createAt, photoURL }) => {
    return (
        <WrapperStyled>
            <div className="">
                <Avatar size="small" src={photoURL}>A</Avatar>

                <AuthorStyled>{displayName}</AuthorStyled>

                <DateStyled>{createAt}</DateStyled>
            </div>

            <div className="">
                <ContentStyled>{text}</ContentStyled>
            </div>
        </WrapperStyled>
    )
}

export default Message;

const WrapperStyled = styled.div`
    margin-bottom: 10px;
`;

const AuthorStyled = styled(Typography.Text)`
    margin-left: 5px;
    font-weight: bold;
`;

const DateStyled = styled(Typography.Text)`
    margin-left: 10px;
    font-size: 11px;
    color: #a7a7a7;
`;

const ContentStyled = styled(Typography.Text)`
    margin-left: 30px;
`;

