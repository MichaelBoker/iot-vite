import httpRequest from "../utils/httpRequest"
import {PieChart, BarChart, StatItem} from "../components";
import Wrapper from "../assets/Wrappers/Stats";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await httpRequest.get('/devices/stats')
    return response.data
  }
}

export const loader = (queryClient) => async () => {
   return await queryClient.ensureQueryData(statsQuery)
}

const Stats = () => {

  const [ barChart, setBarChart ] = useState(true)

  const { data } = useQuery(statsQuery)
  const { deviceStatusCounter, deviceTypeStats, notifications } = data

  return (
    <Wrapper>
      <section id="stats_items">
        <StatItem title='notifications' data={notifications}/>
        <StatItem title='online' data={deviceStatusCounter.true ?? 0}/>
        <StatItem title='offline' data={deviceStatusCounter.false ?? 0}/>
      </section>
      <section id="charts">
        <h3>Devices type stats</h3>
        <button className="btn" onClick={() => (setBarChart(!barChart))}> { barChart ? 'Pie chart' : 'Bar chart' } </button>
        { 
          barChart ? <BarChart data={deviceTypeStats} /> : <PieChart data={deviceTypeStats} />
        }
      </section>
    </Wrapper>
  )
}
export default Stats