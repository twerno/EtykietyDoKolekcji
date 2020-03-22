import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";

export default {
    createRect,
    createRect2,
    createPoint
}

function createRect(chart: am4maps.MapChart, bbox: am4core.IRectangle, color?: am4core.Color) {
    let rect = chart.createChild(am4core.Rectangle);
    rect.x = bbox.x;
    rect.y = bbox.y;
    rect.height = bbox.height;
    rect.width = bbox.width;
    rect.stroke = color || am4core.color("red");
    rect.fillOpacity = 0;
}

function createRect2(chart: am4maps.MapChart, latitude: number, longitude: number, color?: am4core.Color) {
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let rect = imageSeriesTemplate.createChild(am4core.Rectangle);
    // let rect = chart.createChild(am4core.Rectangle);
    rect.height = 10;
    rect.width = 10;
    rect.stroke = color || am4core.color("red");
    rect.fillOpacity = 0;

    imageSeriesTemplate.latitude = latitude;
    imageSeriesTemplate.longitude = longitude;

    imageSeries.data = [{
        latitude,
        longitude
    }];
}

function createPoint(chart: am4maps.MapChart, geoPoint: am4core.IGeoPoint, color?: am4core.Color) {
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 20;
    circle.fill = color || am4core.color("#B27799");
    circle.fillOpacity = 0.5;
    circle.stroke = am4core.color("#000000");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "latitude: {latitude}; longitude: {longitude}";

    imageSeriesTemplate.latitude = geoPoint.latitude;
    imageSeriesTemplate.longitude = geoPoint.longitude;

    var circle2 = imageSeriesTemplate.createChild(am4core.Circle);
    circle2.radius = 4;
    circle2.fill = color || am4core.color("#B27799");
    circle2.stroke = am4core.color("#FFFFFF");
    circle2.strokeWidth = 2;
    circle2.nonScaling = true;

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    // Add data for the three cities
    imageSeries.data = [{
        latitude: geoPoint.latitude,
        longitude: geoPoint.longitude
    }];

}