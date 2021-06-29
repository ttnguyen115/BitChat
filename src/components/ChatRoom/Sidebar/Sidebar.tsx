import { Col, Row } from 'antd';
import React, { FC } from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const Sidebar: FC = () => {
    return (
        <SidebarStyled>
            <Row>
                <Col span={24}>
                    <UserInfo />
                </Col>

                <Col span={24}>
                    <RoomList />
                </Col>
            </Row>
        </SidebarStyled>
    )
}

export default Sidebar;

const SidebarStyled = styled.div`
    background-color: #3f0e40;
    color: white;
    height: 100vh;
`;
