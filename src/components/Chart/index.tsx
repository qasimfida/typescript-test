import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { IData } from '../../types/ChartTypes';

import { useEffect, FC } from 'react';
import { styles } from './styles';
am4core.useTheme(am4themes_animated);

interface IProps {
    data?: IData[] | [];
}
const Chart: FC<IProps> = ({ data = [] }) => {
    const classes = styles();
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
        secondCircle.radius = 5;
        secondCircle.strokeWidth = 0;
        secondCircle.stroke = am4core.color('#28C76F');
        secondCircle.fill = am4core.color('#28C76F');
        secondCircle.disabled = false;

        // disabled labels and grid
        dateAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.grid.template.disabled = true;
        dateAxis.renderer.labels.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        dateAxis.renderer.grid.template.stroke = am4core.color('red');
        valueAxis.renderer.grid.template.stroke = am4core.color('red');
    });
    return (
        <div className={classes.chartWrapper}>
            <div id="chartdiv" className={classes.chart} />
            <div className={classes.bottomBar}></div>
        </div>
    );
};
export default Chart;
