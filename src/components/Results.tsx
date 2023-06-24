type ResultPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = ({ results }: ResultPropsType) => {
  const { country, cityName, temperature, conditionText, icon } = results;
  return (
    <>
      {country && <div>{country}</div>}
      {cityName && <div>{cityName}</div>}
      {temperature && <div>{temperature}<span>℃</span></div>}
      {conditionText &&
        <div>
          <img src={icon} alt='icon' />
          <span>{conditionText}</span>
        </div>
      }
    </>
  );
};

export default Results;
