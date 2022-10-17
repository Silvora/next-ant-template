import Styles from '../styles/index.module.scss'
// import { Button } from 'antd';
import Layouts from "../layouts/layouts"

import AreaCharts from '../components/index/area'
import TinyAreaChart from '../components/index/tinyArea'
import RingCharts from '../components/index/ring'

import StatisticList from '../components/index/statistic'

import Tables from '../components/index/table'
import WordCloudCharts from '../components/index/wordCloud'

export default function Home() {
  return (
    <Layouts>
      <div className={Styles.container}>

        <div className={Styles.StatisticList}>
          <StatisticList></StatisticList>
        </div>

        <div className={Styles.ChartsList}>
          <div className={Styles.leftCharts}>
            <AreaCharts></AreaCharts>
          </div>
          <div className={Styles.rightCharts}>
            <div className={Styles.tinyAreaCharts}>
              <TinyAreaChart></TinyAreaChart>
            </div>
            <div className={Styles.ringCharts}>
              <RingCharts></RingCharts>
            </div>
          </div>
        </div>



        <div className={Styles.Epidemic}>
          <div className={Styles.EpidemicTitle}>Users Geolocation</div>
          <div className={Styles.EpidemicCharts}>
            <div className={Styles.left_Epidemic_table}>
              <Tables></Tables>
            </div>
            <div className={Styles.right_Epidemic_charts}>
              <WordCloudCharts></WordCloudCharts>
            </div>
          </div>
        </div>


      </div>
    </Layouts>
  )
}
