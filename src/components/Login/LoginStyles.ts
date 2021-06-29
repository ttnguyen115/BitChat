import styled from "styled-components";
import { Row, Typography, Button } from "antd";

const { Title } = Typography;

export const RowStyled = styled(Row)`
    justify-content: center;
    height: 800px;
`;

export const TitleStyled = styled(Title)`
    text-align: center;
`;

export const ButtonStyled = styled(Button)`
    width: 100%;
`;