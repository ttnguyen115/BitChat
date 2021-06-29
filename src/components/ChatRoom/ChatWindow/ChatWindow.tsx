import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Tooltip, Form, Input } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatWindow: FC = () => {
    return (
        <WrapperStyled>
            <HeaderStyled>
                <HeaderInfo className="">
                    <HeaderTitle>Room 1</HeaderTitle>
                    <HeaderDesc>This is room 1</HeaderDesc>
                </HeaderInfo>

                <ButtonGroupStyled className="">
                    <Button type="text" icon={<UserAddOutlined />}>Add user</Button>

                    <Avatar.Group size="small" maxCount={2}>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>

                        <Tooltip title="B">
                            <Avatar>B</Avatar>
                        </Tooltip>

                        <Tooltip title="C">
                            <Avatar>C</Avatar>
                        </Tooltip>

                        <Tooltip title="D">
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            
            <ContentStyled>
                <MessageListStyled>
                    <Message text="Test" displayName="Trung" createAt="123" photoURL={null} />
                    <Message text="Test2" displayName="Other" createAt="321" photoURL={null} />
                    <Message text="Test3" displayName="Trung" createAt="111" photoURL={null} />
                    <Message text="Test4" displayName="Other" createAt="222" photoURL={null} />
                </MessageListStyled>

                <FormStyled>
                    <Form.Item>
                        <Input placeholder="Enter a text..." bordered={false} autoComplete="off" />
                    </Form.Item>

                    <Button type="primary">Send</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    )
}

export default ChatWindow;

const WrapperStyled = styled.div`
    height: 100vh;
`;

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeaderTitle = styled.p`
    margin: 0;
    font-weight: bold;
`;

const HeaderDesc = styled.span`
    font-size: 12px;
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;
`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;