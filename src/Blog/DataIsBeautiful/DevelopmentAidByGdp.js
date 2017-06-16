import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, ResponsiveContainer, PieChart, Pie, Legend } from 'recharts'

import './developmentAid.css'

import developmentAidPercentageOfGdp from './developmentAidPercentageOfGdp.json'
import developmentAidByCountry from './developmentAidByCountry.json'

const countries = ["us","gb","de","jp","fr","se","nl","ca","no","it","ch","au","dk","kr","be","es","fi","at","ie","pl","nz","lu","pt","gr","cz","sk","si","is","ae","tr","ru","il","hu","hr","lt","ee","lv","mt"]

class DevelopmentAidByGdp extends Component {

  render() {
    console.log("render")

    const developmentAidByCountryToolTip = (tooltipObject) => {
      if (tooltipObject.active) {
        const content = tooltipObject.content
        const {name, value} = tooltipObject.payload[0]
        const {country, dollars, fill} = tooltipObject.payload[0].payload
        return (
          <div className="developmentAidPercentageOfGdp-tooltip">
            <div className="country"><span>{country}</span></div>
            <div className="dollars"><span>${dollars} Billion USD</span></div>
          </div>
        )
      }
    }

    const developmentAidPercentageOfGdpTooltip = (tooltipObject) => {
      if (tooltipObject.active) {
        const content = tooltipObject.content
        const {name, value} = tooltipObject.payload[0]
        const {country, percentage, fill} = tooltipObject.payload[0].payload
        return (
          <div className="developmentAidPercentageOfGdp-tooltip">
            <div className="country"><span>{country}</span></div>
            <div className="percentage"><span>{percentage}% of GDP</span></div>
          </div>
        )
      }
    }

    const developmentAidByCountryLabel = (labelObject) => {
      console.log(labelObject)
      const {country, dollars, fill} = labelObject.payload
      return (
        <div className="developmentAidByCountry-label">
          <div className="country"><span>{fill}</span></div>
          <div className="percentage"><span>${dollars}B</span></div>
        </div>
      )
    }

    return (
      <div>
        <Helmet>
          <title itemprop="name">Development Aid By Country | Zach Levy's Blog</title>
          <meta name="description" content="PhotoshopBattles as a fun side project." />
            <meta property="og:title" content={`Development Aid By Country | Zach Levy's Blog`} />
            <meta property="og:type" content="image" />
            <meta property="og:url" content={`${window.location.origin}/blog/dataisbeautiful/development-aid-by-gdp/`} />
          <meta property="og:image" content={`${window.location.origin}/images/dataisbeautiful/development_aid_by_country_zach_levy.png`} />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <h2>Development Aid By Country</h2>
            <div><span><em>2017-06-13</em></span></div>
            <br />
            <h4>Development Aid Donors In USD (Billions)</h4>
            <p>Hover over a flag to get absolute dollar values.</p>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Tooltip content={developmentAidByCountryToolTip}/>
                <Pie dataKey="dollars" startAngle={180} endAngle={0} data={developmentAidByCountry} cx={"50%"} cy={"75%"} outerRadius={300} fill="#ffffff" />
              </PieChart>
            </ResponsiveContainer>
            <h4>Development Aid Donors As A Percentage of GDP</h4>
            <p>Hover over a bar to get actual percentage.</p>
            <ResponsiveContainer width="100%" height={1100}>
              <BarChart barGap={0} barSize={20} layout="vertical" data={developmentAidPercentageOfGdp} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis type="number" />
                <YAxis type="category" dataKey="country" />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip content={developmentAidPercentageOfGdpTooltip} />
                <Bar unit="%" dataKey="percentage" fill="#8884d8" stroke="#000000" />
              </BarChart>
            </ResponsiveContainer>
            <div className="preload-flags">
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
            <div className="preload-flags">
              <svg>
                <defs>
                  {
                    countries.map((country, index) => {
                      const height = 6
                      const width = height * 5 / 3
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
              <p>Net official development assistance by country in 2015<a href="https://en.wikipedia.org/wiki/List_of_development_aid_country_donors#Net_official_development_assistance_by_country_in_2015" target="_blank"> Wikipedia</a></p>
              <p>Net official development assistance by country as a percentage of gross national income in 2015 <a href="https://en.wikipedia.org/wiki/List_of_development_aid_country_donors#Net_official_development_assistance_by_country_as_a_percentage_of_gross_national_income_in_2015" target="_blank"> Wikipedia</a></p>
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

export default DevelopmentAidByGdp