import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, LayoutGroup } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import '../../../styles/Dashboard/CardContent.css'

//parent card

const CardContent = (props) => {
    const [expanded, setExpanded] = useState(false)
  return (
    <LayoutGroup>
        {
            expanded ? (
                <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
            ):(
                <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            )
        }
    </LayoutGroup>
  );
};

//Compact card
function CompactCard({param, setExpanded}){
    const Png = param.png;
    return(
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard" //defines which type of card we want
            onClick={setExpanded}
        >
            <div className="radialBar">
            <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
            />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>{param.value}</span>
                <span>Last 6 months</span>
            </div>
        </motion.div>
    );
}

//expanded card
function ExpandedCard({param, setExpanded}){
    const data = {
    options: {
      chart: {
        type: "area", //type of chart we want
        height: "auto",
      },

      dropShadow: { //shadow whenever the card appear
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
    };
    return (
        <motion.div
        className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
        >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
            <UilTimes onClick={setExpanded} />
        </div>
            <span>{param.title}</span>
        <div className="chartContainer">
            <Chart options={data.options} series={param.series} type="area" />
        </div>
        <span>Last 24 hours</span>
        </motion.div>
  );
}

export default CardContent