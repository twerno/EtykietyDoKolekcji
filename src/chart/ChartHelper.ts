import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";
import { IFlagProvider } from "./FlagProvider";

export default {
    zoomAtCountries,
    fillWithCountryFlag
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

function fillWithCountryFlag(countryId: string, target: am4maps.MapPolygon, flagProvider: IFlagProvider) {
    const bbox = getBBoxOf(target);
    const bBoxRatio = bbox.height / bbox.width;

    const flag = flagProvider.provideFlagFor(countryId);
    const flagRatio = flag.height / flag.width;

    const backgroundPattern = new am4core.Pattern();
    backgroundPattern.shapeRendering = "geometricPrecision";
    // const image = new am4core.Paper();
    const image = new am4core.Image();
    image.shapeRendering = "geometricPrecision";
    image.href = flag.url;
    // image.href = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxIiB2aWV3Qm94PSIwIDAgNjEyIDc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmNhZjE3IiBkPSJNMzA2IDE1M2wtOTAgMTQ2LTE2NiA0MCAxMTEgMTMwLTEzIDE3MSAxNTgtNjUgMTU4IDY1LTEzLTE3MSAxMTEtMTMwLTE2Ni00MC05MC0xNDZ6Ii8+PC9zdmc+";
    // image.width = 15;
    // image.height = 20;
    image.nonScaling = true;
    console.log(image.maskRectangle);
    image.exportable = false;

    // adjust flag size to match bbox size
    if (bBoxRatio >= flagRatio) {
        image.width = Math.ceil((flagRatio ** -1) * bbox.height);
        image.height = Math.ceil(bbox.height);

        backgroundPattern.x = bbox.x - (image.width - bbox.width) / 2;
        backgroundPattern.y = bbox.y;
    }
    else {
        image.width = Math.ceil(bbox.width);
        image.height = Math.ceil(flagRatio * bbox.width);

        backgroundPattern.x = bbox.x;
        backgroundPattern.y = Math.floor(bbox.y - (flagRatio * bbox.width - bbox.height) / 2);
    }
    backgroundPattern.addElement(image.element as any);
    backgroundPattern.width = image.width;
    backgroundPattern.height = image.height;
    backgroundPattern.backgroundOpacity = 1;
    backgroundPattern.strokeWidth = 0;
    backgroundPattern.strokeOpacity = 0;

    return backgroundPattern;
}

function getBBoxOf(polygon: am4maps.MapPolygon): am4core.IRectangle {
    return polygon.bbox.width !== 0 && polygon.bbox.height !== 0
        ? polygon.bbox
        : polygon.group.getBBox();
}