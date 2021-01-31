import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useEffect } from 'react';
import { IData } from '../../types/ChartTypes';

am4core.useTheme(am4themes_animated);

interface IProps {
    data?: IData[] | [];
}
const Chart: React.FC<IProps> = ({ data = [] }) => {
    useEffect(() => {
        const chart = am4core.create('chartdiv', am4charts.XYChart);

        chart.data = data || [];

        // Create axes
        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        const series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'value';
        series.dataFields.dateX = 'date';
        series.name = 'Sales';
        series.strokeWidth = 2;

        const bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.strokeWidth = 0;
        bullet.propertyFields.disabled = 'disabled';
        bullet.disabled = true;

        const secondCircle = bullet.createChild(am4core.Circle);
        secondCircle.radius = 6;
        secondCircle.fill = chart.colors.getIndex(8);
        secondCircle.disabled = false;

        // disabled labels and grid
        dateAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.grid.template.disabled = true;
        dateAxis.renderer.labels.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
    });
    return <div id="chartdiv" style={{ width: '100%', height: '200px' }} />;
};
export default Chart;
