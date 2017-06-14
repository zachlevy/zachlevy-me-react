import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import { Tooltip, ResponsiveContainer, PieChart, Pie, Legend } from 'recharts'

import './foreignAid.css'

// import data from './foreignAidGdp.json'
import foreignAidPercentageOfGdp from './foreignAidPercentageOfGdp.json'
import foreignAidByCountry from './foreignAidByCountry.json'

const countries = ["us","gb","de","jp","fr","se","nl","ca","no","it","ch","au","dk","kr","be","es","fi","at","ie","pl","nz","lu","pt","gr","cz","sk","si","is"]

class GDP extends Component {

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
            <h1>Foreign Aid By Country</h1>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Tooltip content={tooltip}/>
                <Pie dataKey="dollars" startAngle={180} endAngle={0} data={foreignAidByCountry} cx={"50%"} cy={"75%"} outerRadius={300} fill="#ffffff" />
              </PieChart>
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
              <h4>Sources</h4>
              <p><a href="https://en.wikipedia.org/wiki/List_of_development_aid_country_donors#Net_official_development_assistance_by_country_as_a_percentage_of_gross_national_income_in_2015" target="_blank">https://en.wikipedia.org/wiki/List_of_development_aid_country_donors</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GDP



//
// Country, %
// Sweden, 1.40
// Norway, 1.05
// Luxembourg, 0.93
// Denmark, 0.85
// Netherlands, 0.76
// United Kingdom, 0.71
// Finland, 0.56
// Switzerland, 0.52
// Germany, 0.52
// Belgium, 0.42
// France, 0.37
// Ireland, 0.36
// Austria, 0.32
// Canada, 0.28
// New Zealand, 0.27
// Australia, 0.27
// Iceland, 0.24
// Japan, 0.22
// Italy, 0.21
// United States, 0.17
// Portugal, 0.16
// Slovenia, 0.15
// Greece, 0.14
// South Korea, 0.14
// Spain, 0.13
// Czech Republic, 0.12
// Slovak Republic, 0.10
// Poland, 0.10
//
//
// Country, Billions $
// United States, 31.08
// United Kingdom, 18.70
// Germany, 17.78
// Japan, 9.32
// France, 9.23
// Sweden, 7.09
// Netherlands, 5.81
// Canada, 4.29
// Norway, 4.28
// Italy, 3.84
// Switzerland, 3.54
// Australia, 3.22
// Denmark, 2.57
// South Korea, 1.91
// Belgium, 1.89
// Spain, 1.60
// Finland, 1.29
// Austria, 1.21
// Ireland, 0.72
// Poland, 0.44
// New Zealand, 0.44
// Luxembourg, 0.36
// Portugal, 0.31
// Greece, 0.28
// Czech Republic, 0.20
// Slovak Republic, 0.09
// Slovenia, 0.06
// Iceland, 0.04
