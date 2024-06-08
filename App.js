import React from 'react';
import StockData from './StockData';
import CandlestickChart from './CandlestickChart';
import KeyRatios from './KeyRatios';
import AnalystEstimates from './AnalystEstimates';

const App = () => {
  return (
    <div>
      <h1>Apple Stock Analysis</h1>
      <StockData />
      <CandlestickChart data={StockData.candlestickData} />
      <KeyRatios stockData={StockData} />
      <AnalystEstimates stockData={StockData} />
    </div>
  );
};

export default App;
