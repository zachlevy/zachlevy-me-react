import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import { PieChart, Pie, Legend } from 'recharts'

// import data from './foreignAidGdp.json'
import foreignAidPercentageOfGdp from './foreignAidPercentageOfGdp.json'
import foreignAidByCountry from './foreignAidByCountry.json'

const countries = ["us","gb","de","jp","fr","se","nl","ca","no","it","ch","au","dk","kr","be","es","fi","at","ie","pl","nz","lu","pt","gr","cz","sk","si","is"]

class GDP extends Component {

  render() {
    console.log("render")
    return (
      <div>
        <Helmet>
          <title itemprop="name">PsBattles | Zach Levy's Blog</title>
          <meta name="description" content="PhotoshopBattles as a fun side project." />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <h1>ok</h1>
            <PieChart width={800} height={400}>
              <Pie dataKey="dollars" startAngle={180} endAngle={0} data={foreignAidByCountry} cx={400} cy={300} outerRadius={250} fill="#000000" label/>
            </PieChart>
            <svg>
              <defs>
                {
                  countries.map((country, index) => {
                    const width = "550"
                    const height = "550"
                    return (
                      <pattern key={index} id={`${country}-flag`} patternUnits="userSpaceOnUse" width={width} height={height}>
                        <image xlinkHref={`/images/countriesFlagsSvgs/${country}.svg`} x="0" y="-100" width={width} height={height}></image>
                      </pattern>
                    )
                  })
                }
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default GDP



// https://en.wikipedia.org/wiki/List_of_development_aid_country_donors#Net_official_development_assistance_by_country_as_a_percentage_of_gross_national_income_in_2015
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
