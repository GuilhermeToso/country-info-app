"use client";
import { PopulationCounts } from "@/types/country";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export type PopulationChartProps = {
  population: PopulationCounts[];
};

const PopulationApexChart = (props: PopulationChartProps) => {
  const { population } = props;
  const years = population.map((data) => data.year);
  const populationValues = population.map((data) => data.value);

  // Helper functions for significant rounding
  function floorSignificant(value: number): number {
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    return Math.floor(value / magnitude) * magnitude;
  }

  function ceilSignificant(value: number): number {
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    return Math.ceil(value / magnitude) * magnitude;
  }

  const minPopulation = Math.min(...populationValues);
  const maxPopulation = Math.max(...populationValues);

  const floorPopulation = floorSignificant(minPopulation);
  const ceilPopulation = ceilSignificant(maxPopulation);

  const series: ApexAxisChartSeries = [
    {
      name: "Population",
      data: populationValues,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: "100%", // Adjust to container height
      dropShadow: {
        enabled: true,
        color: "#4B70F5",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#4B70F5"],
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        borderRadius: 3,
        borderColor: "#333",
        opacity: 0.8,
      },
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetY: -10,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    title: {
      text: "Population over the Years",
      align: "left",
      style: {
        fontSize: "20px",
        color: "#fff",
      },
    },
    grid: {
      borderColor: "#444",
      strokeDashArray: 3,
      row: {
        colors: ["transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#4B70F5",
      strokeWidth: 2,
      shape: "circle",
    },
    xaxis: {
      categories: years,
      title: {
        text: "Year",
        style: {
          fontSize: "14px",
          color: "#fff",
        },
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      title: {
        text: "Population",
        style: {
          fontSize: "14px",
          color: "#fff",
        },
      },
      min: floorPopulation,
      max: ceilPopulation,
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
      labels: {
        colors: "#fff",
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val} people`,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: "100%",
          },
          dataLabels: {
            style: {
              fontSize: "10px",
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: "10px",
                },
              },
            },
            yaxis: {
              labels: {
                style: {
                  fontSize: "10px",
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: "100%",
          },
          dataLabels: {
            style: {
              fontSize: "8px", // Even smaller font for mobile
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-full h-full">
      <Chart options={options} series={series} type="line" height="100%" />
    </div>
  );
};

export default PopulationApexChart;
