import React, { Component } from 'react'

import StatsBlock from './Statistics/Block'

class BookPublishing extends Component {
  render() {
    return (
      <div className="blog-post">
        <h2 className="blog-post-title">I Wrote A Paperback Book With Code</h2>
        <p className="blog-post-meta">May 7, 2017 by Zach Levy</p>
        <div className="row">
          <div className="col-6 col-sm-4">
            <StatsBlock statistic="30" description="Hours" />
          </div>
          <div className="col-6 col-sm-4">
            <StatsBlock statistic="$0" description="Spent" />
          </div>
          <div className="col-6 col-sm-4">
            <StatsBlock statistic="132" description="Book Pages" />
          </div>
        </div>
        <h4>Stop putting authors on pedestals</h4>
        <p>This book was written with a thesis, It's not that hard to write a book. We should stop putting authors on pedestals just because they have published a book - they should have to earn it.</p>
        <h4>Self-Imposing ridiculous constraints</h4>
        <p>As always we have two constraints, time and money which often interchangeable. Because this is a side project I have a severe lack of both. I decided my constraints were to write and publish a book in 20 hours or less, spending no more than $50.</p>
        <h4>Skip or automate as much as possible</h4>
        <p>With what seems like an impossibly large task, you must break it down into smaller problems. Then, my next and favorite step is to remove everything in the way so you can to reach the final goal. This approach works very well with building software prototypes, which I have built many, so I decided to apply it to the book. Automation is a life saver, being a software developer helps a lot.</p>
        <h4>Deconstructing an author</h4>
        <p>I broke down authoring in smaller tasks, activities an author would need to do to sell a book. Then I tried to skip or automate everything:</p>
        <ul>
          <li><strong>Inspiration/ideation</strong> I would need to think of an initial topic, but I could automate collection or formatting the data to write about.</li>
          <li><strong>Writing</strong> I could automate some of this, but I needed to produce something original to have the copyrights, which likely meant a human touch.</li>
          <li><strong>Reviewing</strong> I would skip - A spell checker is good enough.</li>
          <li><strong>Publishing/Printing</strong> I would automate with Amazon, I hear they're good with books.</li>
          <li><strong>Distributing</strong> only on e-commerce. I don't have money to invest in printing thousands of books and I don't want to spend time pitching for investment.</li>
        </ul>
        <h4>Scraping Reddit for inspiration</h4>
        <p>For ideation, I used the Life Pro Tips subreddit. Convenient, Reddit has an API that returns posts in JSON format. I created a <a href="https://github.com/zachlevy/reddit-book" target="_blank">Rails 5 app</a> to help me scrape and manipulate the data. Rails was definitely overkill for what I needed, but I wanted to do a project with the latest Rails 5 release, so this seemed like a good opportunity.</p>
        <p>I created a rake task that would scrape the top posts of a subreddit. While doing this I noticed that subreddits have flair, which is similar to a category. The categories included, Careers & Work, Travelling, School & College, Social, etc. perfect to make chapters of in the book.</p>
        <p>I ended up with ~900 posts in my database of the top posts in the Life Pro Tips subreddit. Inspiration is go.</p>
        <h4>Writing to avoid copyright</h4>
        <p>Ideally I would have just taken the top Life Pro Tips from Reddit, downloaded it as PDF and uploaded it to Amazon, however, there was one glaring issue: Copyright. According to Reddit's Terms of Use, the poster of the content owns the copyright to their post, and gives Reddit the opportunity to distribute it. This is reasonable, however I don't have time to ask every user for use and I don't want to infringe on anyone's copyright, so I couldn't use the actual posts, I would have to actually write my own.</p>
        <h4>When cleverness fails, Grind</h4>
        <p>My initial thought was to use a paraphrasing API to consume the posts and return an original work. Unfortunately the posts were mangled and some didn't have the opportunity to use synonyms etc. so I took the hard path. I grinded out reading each post, choosing my favorites and making sure to put them in my own words. This part of the project took longer than expected but at least I would avoid any copyright issues.</p>
          <h4>Publishing</h4>
          <p>Initially I was going to use CreateSpace to publish my book, however, it turned out to be more work than Kindle Direct Publishing. Both use Amazon for distribution however, KDP was easier to use. The biggest downside is that KDP doesn't allow for purchase from Amazon.ca.</p>
          <p>In terms of paperwork and taxes, I decided to use my person instead of my freelancing company for convenience even though I'll pay more in taxes.</p>
        <div className="row">
          <div className="col-12 col-sm-8">
            <p>Uploading was very simple, KDP has a clear specification on their website for cover artwork and formatting. I tried using HTML/CSS for my formating but ended up using Google Docs for flexibility and exporting to PDF. My inspiration for the cover was from Cards Against Humanity, a simple modern theme which I applied throughout the book.</p>
          </div>
          <div className="col-12 col-sm-4">
            <div className="row">
              <div className="col-12">
                <iframe style={{width:"120px", height:"240px"}} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=zachlevy-20&marketplace=amazon&region=US&placement=152024729X&asins=152024729X&linkId=2fe0f589b2d21fd4bed9971cd6d10c97&show_border=false&link_opens_in_new_window=true&price_color=999999&title_color=0066c0&bg_color=ffffff">
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <h4>Regrets</h4>
        <ul>
          <li>Didn't take the extra time to publish through CreateSpace to be able to distribute through Amazon.ca. Most of my network is in Canada so this would have been useful.</li>
          <li>Didn't print my name anywhere in the book, you can find it through ISBN though.</li>
          <li>Sales goal. I have yet to commit to a sales goal for the book, I was more entirely focused on its creation.</li>
        </ul>
      </div>
    )
  }
}

export default BookPublishing
