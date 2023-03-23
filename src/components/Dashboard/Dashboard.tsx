import * as Highcharts from "highcharts";
import React from "react";
import { DashboardProps } from "../../types/components/dashboard";
import Page from "../Page/Page";

export default function Dashboard(props: DashboardProps) {
  const { assetsStatusChartData, assetsHealthscoreChartData } = props;
  // var Highcharts = require("highcharts");
  React.useEffect(() => {
    if (
      !!assetsStatusChartData?.length &&
      !!assetsHealthscoreChartData.length
    ) {
      (Highcharts as any).chart("donut", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
        },
        title: {
          text: "Status dos Ativos",
          align: "center",
          verticalAlign: "middle",
          y: 150,
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: "bold",
                color: "white",
              },
            },
            startAngle: -90,
            endAngle: 90,
            center: ["50%", "100%"],
            size: "110%",
          },
        },
        series: [
          {
            type: "pie",
            name: "Proporção do Status",
            innerSize: "50%",
            data: assetsStatusChartData,
          },
        ],
      });

      (Highcharts as any).chart("inverted-donut", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
        },
        title: {
          text: "Saúde dos Ativos",
          align: "center",
          verticalAlign: "middle",
          y: -125,
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: "bold",
                color: "white",
              },
            },
            startAngle: 90,
            endAngle: 270,
            center: ["50%", "0%"],
            size: "110%",
          },
        },
        series: [
          {
            type: "pie",
            name: "Score Geral",
            innerSize: "50%",
            data: assetsHealthscoreChartData,
          },
        ],
      });
    }
  }, [assetsStatusChartData, assetsHealthscoreChartData]);

  return (
    <Page title="Dashboard">
      <div id="donut" style={{ width: "100%" }} />
      <div id="inverted-donut" style={{ width: "100%" }} />
    </Page>
  );
}
