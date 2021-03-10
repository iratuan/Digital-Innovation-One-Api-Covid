import React, { memo } from "react";
import RefreshIcon from "./../../../assets/images/refresh.svg";
import { Card, Typography, Button, Select, MenuItem } from "components";
import { CardPanelContentStyled, ItemStyled } from "./style";
import numberFormatter from "../../../commons/utils/numberFormatter";
import COUNTRIES from "commons/constants/countries";

const navigatorhasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, recovered, deaths, todayCases, todayDeath } = data;
  const textCovid19 = `País ${country} - total de casos:${numberFormatter(cases)}, recuperados: ${numberFormatter(recovered)}, total de óbitos: ${numberFormatter(deaths)}`;

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID 19 
          </Typography>
          <Typography variant="h6" component="span" color="primary" className="ml-1">
             Dashboard Coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="primary" className="ml-1"> Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorhasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
