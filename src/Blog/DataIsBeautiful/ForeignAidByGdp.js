import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, ResponsiveContainer, PieChart, Pie, Legend } from 'recharts'

import './foreignAid.css'

import foreignAidPercentageOfGdp from './foreignAidPercentageOfGdp.json'
import foreignAidByCountry from './foreignAidByCountry.json'

const countries = ["us","gb","de","jp","fr","se","nl","ca","no","it","ch","au","dk","kr","be","es","fi","at","ie","pl","nz","lu","pt","gr","cz","sk","si","is"]

class ForeignAidByGdp extends Component {

  render() {
    console.log("render")

    const tooltip = (tooltipObject) => {
      if (tooltipObject.active) {
        const content = tooltipObject.content
        const {name, value} = tooltipObject.payload[0]
        const {country, dollars, fill} = tooltipObject.payload[0].payload
        return (
          <div className="foreignAidPercentageOfGdp-tooltip">
            <div className="country"><span>{country}</span></div>
            <div className="dollars"><span>${dollars} Billion USD</span></div>
          </div>
        )
      }

    }

    return (
      <div>
        <Helmet>
          <title itemprop="name">PsBattles | Zach Levy's Blog</title>
          <meta name="description" content="PhotoshopBattles as a fun side project." />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <h2>Foreign Aid By Country</h2>
            <div><span>2017-06-13</span></div>
            <br />
            <h4>Foreign Aid In USD (Billions)</h4>
            <p>Hover over a flag to get absolute dollar values.</p>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Tooltip content={tooltip}/>
                <Pie dataKey="dollars" startAngle={180} endAngle={0} data={foreignAidByCountry} cx={"50%"} cy={"75%"} outerRadius={300} fill="#ffffff" />
              </PieChart>
            </ResponsiveContainer>
            <h4>Foreign Aid As A Percentage of GDP</h4>
            <p>Hover over a flag to get absolute dollar values.</p>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={foreignAidPercentageOfGdp} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="country"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <div>
              <svg>
                <defs>
                  {
                    countries.map((country, index) => {
                      const width = "700"
                      const height = "500"
                      return (
                        <pattern key={index} id={`${country}-flag`} patternUnits="userSpaceOnUse" width={width} height={height}>
                          <image xlinkHref={`/images/countriesFlagsSvgs/${country}.svg`} x="0" y="0" width={width} height={height}></image>
                        </pattern>
                      )
                    })
                  }
                </defs>
              </svg>
            </div>
            <div>
              <svg>
                <defs>
                  {
                    countries.map((country, index) => {
                      const width = 30 * 0.7
                      const height = 18 * 0.7
                      return (
                        <pattern key={index} id={`${country}-flag-sm`} patternUnits="userSpaceOnUse" width={width} height={height}>
                          <image xlinkHref={`/images/countriesFlagsSvgs/${country}.svg`} x="0" y="0" width={width} height={height}></image>
                        </pattern>
                      )
                    })
                  }
                </defs>
              </svg>
            </div>
            <div>
              <h5>Sources</h5>
              <p><a href="https://en.wikipedia.org/wiki/List_of_development_aid_country_donors#Net_official_development_assistance_by_country_as_a_percentage_of_gross_national_income_in_2015" target="_blank">https://en.wikipedia.org/wiki/List_of_development_aid_country_donors</a></p>
              <h5>Stack</h5>
              <ul>
                <li><a href="https://facebook.github.io/react/" target="_blank">React.js</a></li>
                <li><a href="https://d3js.org/" target="_blank">d3.js</a></li>
                <li><a href="http://recharts.org/" target="_blank">Recharts</a></li>
                <li><a href="https://github.com/hjnilsson/country-flags" target="_blank">hjnilsson's country-flags</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForeignAidByGdp
