import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import geoData from "@amcharts/amcharts4-geodata/worldLow";
import * as React from 'react';
import ChartHelper from "./ChartHelper";
import ChartStyle from "./ChartStyle";
import { FlagIconCssProvider } from "./FlagProvider";

export type MinimapPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface IMapChartProps {
    labelList: Array<{ countryCode: string, label?: React.ReactNode }>;
    zoomToCountriesList?: string[];
    minimap?: MinimapPosition;
}

export const MapChart = (props: IMapChartProps) => {

    const [id] = React.useState(Math.random().toString());
    const chartRef = React.useRef<am4maps.MapChart | null>(null);

    React.useEffect(() => {
        const chart = am4core.create(`chartdiv_${id}`, am4maps.MapChart);
        setUpChart(chart, props);
        chartRef.current = chart;
        return () => {
            chartRef.current = null;
        }
    });

    return (
        <div id={`chartdiv_${id}`} style={{ width: "100%", height: "100%" }}></div>
    );
}

const setUpChart = (chart: am4maps.MapChart, props: IMapChartProps) => {
    // Set map definition
    chart.geodata = geoData;
    chart.shapeRendering = "geometricPrecision";

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    polygonSeries.shapeRendering = "geometricPrecision";

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "<{id}> - {name}";
    polygonTemplate.fill = am4core.color("#ffffff");
    polygonTemplate.fillOpacity = 1;
    polygonTemplate.stroke = am4core.color("#000");
    polygonTemplate.shapeRendering = "geometricPrecision";

    // Create image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    var imageSeriesTemplate = imageSeries.mapImages.template;
    // var flag = imageSeriesTemplate.createChild(am4core.Image);
    // flag.width = 20;
    // flag.height = 15;
    // flag.nonScaling = true;
    // flag.horizontalCenter = "middle";
    // flag.verticalCenter = "middle";
    // flag.propertyFields.href = "flag";
    // flag.filters.push(new am4core.DropShadowFilter());

    // // Set property fields
    // imageSeriesTemplate.propertyFields.latitude = "latitude";
    // imageSeriesTemplate.propertyFields.longitude = "longitude";

    polygonTemplate.adapter.add("fill", ChartStyle.fillStyle(props));
    polygonTemplate.adapter.add("stroke", ChartStyle.strokeStyle(props));
    polygonTemplate.adapter.add("strokeWidth", ChartStyle.strokeWidthStyle(props));

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Setup background
    chart.background.fill = am4core.color("#aadaff");
    chart.background.fillOpacity = 1;

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

    // zoom to country
    chart.events.on("ready", (ev) => {
        const countryList = props.zoomToCountriesList || props.labelList.map(v => v.countryCode);
        ChartHelper.zoomAtCountries(countryList, chart, polygonSeries);

        imageSeries.data = props.labelList.map(v => (
            {
                flag: FlagIconCssProvider.provideFlagFor(v.countryCode).url,
                latitude: polygonSeries.getPolygonById(v.countryCode.toUpperCase())?.latitude,
                longitude: polygonSeries.getPolygonById(v.countryCode.toUpperCase())?.longitude,
            }
        ));
    });

    minimap(chart, polygonSeries, props);

}

function minimap(chart: am4maps.MapChart, polygonSeries: am4maps.MapPolygonSeries, props: IMapChartProps) {
    if (props.minimap) {
        chart.smallMap = new am4maps.SmallMap();
        chart.smallMap.series.push(polygonSeries);

        chart.smallMap.rectangle.stroke = am4core.color("black");
        chart.smallMap.rectangle.strokeWidth = 2;

        chart.smallMap.background.stroke = am4core.color("grey")
        chart.smallMap.background.strokeWidth = 2;
        chart.smallMap.background.fillOpacity = 1;

        let smallSeries = chart.smallMap.series.getIndex(0);
        if (smallSeries instanceof am4maps.MapPolygonSeries) {
            smallSeries.mapPolygons.template.strokeWidth = 0;
            smallSeries.mapPolygons.template.adapter.add("fill", () => am4core.color('#c8f9c7'), 10);
            smallSeries.mapPolygons.template.adapter.add("stroke", () => am4core.color('#696969'), 10);
            smallSeries.mapPolygons.template.adapter.add("strokeWidth", () => 0.2, 10);
        }

        chart.smallMap.align = props.minimap.indexOf('left') !== -1 ? 'left' : 'right';
        chart.smallMap.valign = props.minimap.indexOf('top') !== -1 ? 'top' : 'bottom';
    }
}