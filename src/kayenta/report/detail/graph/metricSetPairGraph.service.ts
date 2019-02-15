import * as React from 'react';

import { IMetricSetPair } from 'kayenta/domain/IMetricSetPair';
import { ICanaryAnalysisResult } from 'kayenta/domain/ICanaryJudgeResult';
import { buildDelegateService } from 'kayenta/service/delegateFactory';

// e.g., amplitude vs. time, histogram, etc.
export enum GraphType {
  TimeSeries = 'Time Series',
  TimeSeries2 = 'Time Series 2',
  Histogram = 'Histogram',
  Histogram2 = 'Histogram 2',
  BoxPlot = 'Box Plot',
}

export interface IMetricSetPairGraphProps {
  type: GraphType;
  metricSetPair: IMetricSetPair;
  result: ICanaryAnalysisResult;
}

export interface IMetricSetPairGraph {
  /*
  * Name of the graph implementation, referenced in settings.js.
  * */
  name: string;

  /*
  * Returns top-level graph component class.
  * */
  getGraph(): React.ComponentClass<IMetricSetPairGraphProps>;

  /*
  * Returns true if the graph implementation supports a given graph type.
  * */
  handlesGraphType(type: GraphType): boolean;
}

export const metricSetPairGraphService = buildDelegateService<IMetricSetPairGraph>();
