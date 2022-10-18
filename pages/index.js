import Styles from '../styles/index.module.scss'
//Layouts
import Layouts from "../layouts/layouts"

//center
import AreaCharts from '../components/index/area'
import TinyAreaChart from '../components/index/tinyArea'
import RingCharts from '../components/index/ring'

//top
import StatisticList from '../components/index/statistic'

//table
import Tables from '../components/index/table'
import WordCloudCharts from '../components/index/wordCloud'

//footer
import TimeLine from '../components/index/timeLine'
import Tickets from '../components/index/tickets'
import People from '../components/index/people'

import Footer from '../components/index/footer'

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

        <div className={Styles.DivLine}>
          <div className={Styles.Time}>
            <TimeLine></TimeLine>
          </div>
          <div className={Styles.Tickets}>
            <Tickets></Tickets>
          </div>
          <div className={Styles.People}>
            <People></People>
          </div>
        </div>

        <div className={Styles.FooterCharts}>
          <Footer></Footer>
        </div>
      </div>
    </Layouts>
  )
}
