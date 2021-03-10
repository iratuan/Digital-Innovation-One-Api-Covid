import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card as CardUI } from "../../../components";
import numberFormatter from "../../../commons/utils/numberFormatter";

import { LabelStyled, ValueStyled, CardContentStyled } from "./style";

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{isNaN(parseFloat(value)) ? 0 : numberFormatter(value)}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  );
}

export default memo(Card);
