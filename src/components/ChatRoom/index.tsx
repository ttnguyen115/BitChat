import React, { FC } from 'react'
import ChatWindow from './ChatWindow/ChatWindow';
import Sidebar from './Sidebar/Sidebar';
import { Row, Col } from 'antd';

const ChatRoom: FC = () => {
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Sidebar />
                </Col>

                <Col span={18}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    )
}

export default ChatRoom
