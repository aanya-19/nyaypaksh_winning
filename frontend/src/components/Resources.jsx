import React, { useState, useEffect } from "react";
import "../styles/Resources.css";

function Resources() {
  const [news, setNews] = useState([
    {
      news_title: "Govt plans amendments to law, proposes dedicated commercial courts at district level",
      content: "India's Union Law Ministry has introduced a draft bill proposing the establishment of dedicated commercial courts at the district level. The proposed amendment aims to expedite the resolution of commercial disputes and streamline legal processes.",
      link: "https://economictimes.indiatimes.com/news/india/govt-plans-amendments-to-law-proposes-dedicated-commercial-courts-at-district-level/articleshow/115221443.cms?from=mdr"
    },
    {
      news_title: "Mediation an emerging alternative for commercial dispute resolution says Justice Pratibha M. Singh",
      content: "Justice Pratibha M. Singh of the Delhi High Court speaking at ETLegalWorld’s 3rd Commercial Dispute Conclave shared her insights on the evolving landscape of India's legal system, highlighting significant improvements in dispute resolution times and forecasting future challenges.",
      link: "https://legal.economictimes.indiatimes.com/news/industry/mediation-over-arbitration-a-promising-alternative-dispute-resolution-method/113112543"
    },
    {
      news_title: "Pre-institution mediation must for counter-claims in commercial cases",
      content: "The Delhi High Court has held that mandatory pre-institution mediation is a requirement under civil law and it applies equally to counter-claims in commercial disputes, irrespective of whether the original suit underwent such mediation.",
      link: "https://www.business-standard.com/industry/news/pre-institution-mediation-must-for-counter-claims-in-commercial-cases-hc-124090401153_1.html"
    },
    {
      news_title: "Arbitration now preferred method for commercial justice: CJI Chandrachud",
      content: "In his address, the CJI pointed out that courts in India are overburdened despite high courts disposing of 2.15 million cases and the district courts disposing of 44.70 million cases in 2023.",
      link: "https://www.hindustantimes.com/india-news/arbitration-now-preferred-method-for-commercial-justice-cji-chandrachud-101717744876872.html"
    },
    {
      news_title: "Supreme Court judges to launch book on Commercial Dispute Resolution",
      content: "The book, published by LexisNexis, will also be launched in Chennai by Supreme Court judge Justice MM Sundresh and Acting Chief Justice of the Madras High Court, Justice D Krishnakumar along with American lawyer Gary B Born on August 31, 2024.",
      link: "https://www.barandbench.com/news/book-launch-supreme-court-judges-to-launch-book-on-commercial-dispute-resolution"
    },
    {
      news_title: "ICC urges Guwahati HC to be designated as commercial court for faster resolution of arbitration appeals",
      content: "The Indian Chamber of Commerce has urged the Ministry of Law and Justice to designate the Guwahati High Court as a Commercial Court. This request aims to expedite the resolution of commercial disputes in Assam by allowing the High Court to handle appeals related to arbitration awards, addressing the delays currently experienced in lower courts.",
      link: "https://economictimes.indiatimes.com/news/india/icc-urges-guwahati-hc-to-be-designated-as-commercial-court-for-faster-resolution-of-arbitration-appeals/articleshow/115090803.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
    }
  ]);

  const [laws, setLaws] = useState([
    {
      law_name: "Indian Contract Act",
      year_enacted: 1872,
      summary: "Governs contracts, including provisions related to agreements, breaches, and remedies.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Sale of Goods Act",
      year_enacted: 1930,
      summary: "Regulates contracts related to the sale of goods, including terms of contract, delivery, and risk.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Partnership Act",
      year_enacted: 1932,
      summary: "Regulates partnerships, including the formation, rights, and dissolution of partnership firms.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Companies Act",
      year_enacted: 2013,
      summary: "Regulates the incorporation, responsibilities, and dissolution of companies.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Negotiable Instruments Act",
      year_enacted: 1881,
      summary: "Governs negotiable instruments like promissory notes, cheques, and bills of exchange.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Arbitration and Conciliation Act",
      year_enacted: 1996,
      summary: "Provides the legal framework for the resolution of disputes through arbitration and conciliation.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Intellectual Property Laws",
      year_enacted: 0,
      summary: "Covers intellectual property rights such as patents, trademarks, copyrights, and designs.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Insolvency and Bankruptcy Code",
      year_enacted: 2016,
      summary: "Provides the process for resolving insolvency and bankruptcy of individuals and companies.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Foreign Exchange Management Act",
      year_enacted: 1999,
      summary: "Regulates foreign exchange transactions in India, including payments, investments, and export-import activities.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Consumer Protection Act",
      year_enacted: 2019,
      summary: "Provides protection to consumers and includes provisions related to disputes, complaints, and redressal.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Securities Contracts (Regulation) Act",
      year_enacted: 1956,
      summary: "Regulates securities exchanges, trading, and dealing in securities in India.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Banking Regulation Act",
      year_enacted: 1949,
      summary: "Governs the regulation of banking institutions and sets standards for the management of banks in India.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Indian Trusts Act",
      year_enacted: 1882,
      summary: "Governs the creation, administration, and management of trusts in India.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Factories Act",
      year_enacted: 1948,
      summary: "Regulates labor conditions and safety standards in factories.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Labour Laws",
      year_enacted: 0,
      summary: "Includes various acts like the Industrial Disputes Act, Minimum Wages Act, and Payment of Gratuity Act.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Copyright Act",
      year_enacted: 1957,
      summary: "Regulates the protection of authorship in literary, dramatic, musical, and artistic works.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Patents Act",
      year_enacted: 1970,
      summary: "Regulates the protection of inventions and grants patents for new technologies.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Trademarks Act",
      year_enacted: 1999,
      summary: "Regulates the registration, protection, and enforcement of trademarks.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Consumer Credit Act",
      year_enacted: 2003,
      summary: "Regulates consumer credit transactions and protects consumers from unfair practices.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Securities and Exchange Board of India Act (SEBI Act)",
      year_enacted: 1992,
      summary: "Regulates the securities market and aims to protect the interests of investors.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Prevention of Money Laundering Act",
      year_enacted: 2002,
      summary: "Aims to prevent money laundering and provides legal measures for prosecution.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The Companies (Amendment) Act",
      year_enacted: 2017,
      summary: "Amends the Companies Act, 2013, to improve corporate governance and ease of doing business.",
      link: "https://www.indiacode.nic.in/"
    },
    {
      law_name: "The National Company Law Tribunal Act",
      year_enacted: 2016,
      summary: "Establishes a tribunal for resolving disputes related to companies and insolvency.",
      link: "https://www.indiacode.nic.in/"
    }
  ]);

  return (
    <div className="resources-container">
      <div className="news-section">
        <h2>Latest News</h2>
        <div className="carousel-container">
          <div className="carousel">
            {news.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="news-card">
                  <div className="news-card-content">
                    <h3 className="news-card-title">{item.news_title}</h3>
                    <p className="news-card-description">{item.content}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-card-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="prev-button">‹</button>
          <button className="next-button">›</button>
        </div>
      </div>
      <div className="laws-section">
        <h2>Law Book</h2>
        <div className="law-card-container">
          {laws.map((item, index) => (
            <div key={index} className="law-card">
              <div className="law-card-content">
                <h3 className="law-card-title">{item.law_name}</h3>
                <p className="law-card-description">{item.summary_of_changes}</p>
                <p className="law-card-date">{item.effective_date}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="law-card-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;