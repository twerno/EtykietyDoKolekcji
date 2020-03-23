import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import { IMapChartProps } from "./chart";
import ChartHelper from "./ChartHelper";

export default {
    fillStyle,
    strokeStyle,
    strokeWidthStyle
}

function isCountryFromList(id: string | undefined, countryIdList: string[]): id is string {
    return (typeof id === 'string'
        && countryIdList.findIndex(v => v.toLowerCase() === id.toLowerCase()) !== -1);
}

function fillStyle(props: IMapChartProps) {
    return (fill: am4core.Optional<am4core.Color | am4core.Pattern | am4core.LinearGradient | am4core.RadialGradient>, target: am4maps.MapPolygon) => {
        const id = (target.dataItem.dataContext as any)?.id as string | undefined;
        return isCountryFromList(id, props.countryDataList.map(v => v.countryCode))
            ? ChartHelper.fillWithCountryFlag(id, target, props.flagProvider)
            : fill;
    }
}

function strokeStyle(props: IMapChartProps) {
    return (stroke: am4core.Optional<am4core.Color | am4core.Pattern | am4core.LinearGradient | am4core.RadialGradient>, target: am4maps.MapPolygon) => {
        const id = (target.dataItem.dataContext as any)?.id as string | undefined;
        return isCountryFromList(id, props.countryDataList.map(v => v.countryCode))
            ? am4core.color("black")
            : stroke;
    }
}

function strokeWidthStyle(props: IMapChartProps) {
    return (strokeWidth: number | undefined, target: am4maps.MapPolygon) => {
        const id = (target.dataItem.dataContext as any)?.id as string | undefined;
        return isCountryFromList(id, props.countryDataList.map(v => v.countryCode))
            ? 2.5
            : strokeWidth;
    }
}
