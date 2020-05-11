import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";
import { IFlagProvider } from "./FlagProvider";

export default {
    zoomAtCountries,
    fillWithCountryFlag,
    zoomToMultiple
}

function zoomAtCountries(countriesId: string[], chart: am4maps.MapChart, polygonSeries: am4maps.MapPolygonSeries) {

    const countryPolygonList = countriesId
        .map(v => v.toUpperCase())
        .map(v => polygonSeries.getPolygonById(v));

    // compute bbox - in order to compute zoomLevel
    const bbox = countryPolygonList
        .map(v => getBBoxOf(v))
        .reduce((prev, curr) => (
            {
                x1: Math.min(prev.x1, curr.x),
                y1: Math.min(prev.y1, curr.y),
                x2: Math.max(prev.x2, curr.width + curr.x),
                y2: Math.max(prev.y2, curr.height + curr.y),
            }
        ), { x1: Number.MAX_VALUE, y1: Number.MAX_VALUE, y2: 0, x2: 0 });

    // center map at point
    const geoPoint = chart.projection.invert(
        {
            x: (bbox.x2 + bbox.x1) / 2,
            y: (bbox.y2 + bbox.y1) / 2
        }
    );

    // ChartDebugHelper.createPoint(chart, geoPoint);
    // ChartDebugHelper.createRect(chart, { x: bbox.x1, y: bbox.y1, height: bbox.y2 - bbox.y1, width: bbox.x2 - bbox.x1 })

    // zoom map
    const zoomLevel = Math.min(
        chart.seriesWidth / (bbox.x2 - bbox.x1),
        chart.seriesHeight / (bbox.y2 - bbox.y1)
    ) - 0.3;

    chart.zoomToGeoPoint(geoPoint, zoomLevel, true, 0);
}
// https://www.amcharts.com/docs/v4/tutorials/pre-zooming-map-to-a-list-of-countries/
function zoomToMultiple(countriesId: string[], chart: am4maps.MapChart, polygonSeries: am4maps.MapPolygonSeries) {

    const countryPolygonList = countriesId
        .map(v => v.toUpperCase())
        .map(v => polygonSeries.getPolygonById(v));

    const { north, south, west, east } = countryPolygonList.reduce<{ north: number, south: number, west: number, east: number }>((prev, curr) => ({
        north: prev.north === undefined || curr.north > prev.north
            ? curr.north
            : prev.north,

        south: prev.south === undefined || curr.south < prev.south
            ? curr.south
            : prev.south,

        west: prev.west === undefined || curr.west < prev.west
            ? curr.west
            : prev.west,

        east: prev.east === undefined || curr.east > prev.east
            ? curr.east
            : prev.east
    }), {} as any);

    countryPolygonList.forEach(c => c.isActive = true);

    chart.zoomToRectangle(north, east, south, west, 1, true, 0);
}

function fillWithCountryFlag(countryId: string, target: am4maps.MapPolygon, flagProvider: IFlagProvider) {
    const bbox = getBBoxOf(target);
    const bBoxRatio = bbox.width / bbox.height;

    const flag = flagProvider.provideFlagFor(countryId);
    const flagRatio = flag.width / flag.height;

    const backgroundPattern = new am4core.Pattern();
    const image = new am4core.Image();
    image.href = flag.url;

    // adjust flag size to match bbox size
    if (flagRatio >= bBoxRatio) {
        image.width = bbox.height * flagRatio * 1.2;
        image.height = bbox.height * 1.2;

        backgroundPattern.x = bbox.x - (image.width - bbox.width) / 2;
        backgroundPattern.y = bbox.y - bbox.height * 0.05;
    }
    else {
        image.width = bbox.width * 1.2;
        image.height = bbox.width * flagRatio * 1.2;

        backgroundPattern.x = bbox.x;
        backgroundPattern.y = bbox.y - (flagRatio * bbox.width - bbox.height) / 2 - bbox.width * 0.05;
    }
    backgroundPattern.addElement(image.element as any);
    backgroundPattern.width = image.width;
    backgroundPattern.height = image.height;
    backgroundPattern.backgroundOpacity = 1;

    return backgroundPattern;
}

function getBBoxOf(polygon: am4maps.MapPolygon): am4core.IRectangle {
    return polygon.bbox.width !== 0 && polygon.bbox.height !== 0
        ? polygon.bbox
        : polygon.group.getBBox();
}