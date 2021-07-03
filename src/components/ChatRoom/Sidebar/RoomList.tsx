import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import React, { FC, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { setRoom } from '../../../features/room/roomSlice';
import { conditionTypes, roomData } from '../../../features/types';
import useFirestore from '../../../hooks/useFirestore';

const { Panel } = Collapse;

const RoomList: FC = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state: RootState) => state.user.data);

    const roomsCondition: conditionTypes = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: userData?.uid
        }
    }, [userData?.uid]);

    const rooms: Array<roomData> = useFirestore('rooms', roomsCondition);

    useEffect(() => {
        if (rooms.length > 0) {
            dispatch(setRoom(rooms))
        }
    }, [rooms.length, dispatch, rooms]);

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Room list" key='1'>
                {
                    rooms.map(room => (
                        <LinkStyled key={room.name}>{room.name}</LinkStyled>
                    ))
                }
                <Button type="text" icon={<PlusSquareOutlined/>} className="add-room">Add new room</Button>
            </PanelStyled>
        </Collapse>
    )
}

export default RoomList;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }

        .add-room {
            color: white;
            padding: 0;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;