import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.personalDescription}>
        <div>
        "web3 developer exploring new forms of public digital infrastructure"  
        </div>
      </section>
      <section className={utilStyles.headingTwitterGithub}>
        <a
          href="https://twitter.com/0xTranqui"
          style={{ fontSize: "1.2rem", lineHeight: "1.5" }}
        >
          Twitter
        </a>
        <div 
          style={{ paddingLeft: "5px", paddingRight: "5px", fontSize: "1.2rem", lineHeight: "1.5" }}
        >
          |
        </div>
        <a
          style={{ fontSize: "1.2rem", lineHeight: "1.5" }}
          href="https://github.com/0xTranqui"
          /* style={{ justifySelf: "start", marginLeft: "5%"}} */
        >
          GitHub
        </a>
      </section>
      <div style={{ textAlign: "center" }}> 
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Work</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <a href="https://gardens.feltzine.art/">
              gardens.feltzine.art
              </a>
              {" - "} 
              <a href="https://github.com/0xTranqui/felt-zine-delights">
              repo
              </a>
              {" - "} 
              <a href="https://twitter.com/0xTranqui/status/1537148175596789762">
              guide
              </a>              
            </li>            
            <li className={utilStyles.listItem}>
              <a href="https://findersfeefinder.xyz/">
              findersfeefinder.xyz
              </a>
              {" - "} 
              <a href="https://github.com/0xTranqui/Finders-Fee-Finder">
              repo
              </a>
              {" - "} 
              <a href="https://twitter.com/ZORA_FFF/status/1531710410445012992?s=20&t=6__slhQckcv4hmI9UePppw">
              guide
              </a>
            </li>
            <li className={utilStyles.listItem}>
              <a href="https://www.lostfound.world/">
              lostfound.world 
              </a>
              {" - "} 
              <a href="https://github.com/0xTranqui/lostandfound-zora-marketplace">
              repo
              </a>
            </li>
            <li className={utilStyles.listItem}>
              <a href="https://www.lostfound.blue/">
                lostfound.blue
              </a>
              {" - "} 
              <a href="https://github.com/0xTranqui/lostandfound-optimism-marketplace">
              repo
              </a>            
            </li>
          </ul>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Writing</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href={`/posts/100-days-of-code`}>
                <a>Condensed Guide for Learning Full-Stack Web3 Development in 100 Days</a>
              </Link>
            </li>            
            <li className={utilStyles.listItem}>
              <a href="https://twitter.com/0xTranqui/status/1489388539464847366?s=20&t=rZAv8pnSvFP0vSqJbSoS4Q">
                100 Day Learn to Code Experiment - Daily Logs
              </a>
            </li>
            <li className={utilStyles.listItem}>
              <a href="https://twitter.com/0xTranqui/status/1506722429208567819?s=20&t=rZAv8pnSvFP0vSqJbSoS4Q">
              Unofficial Guide to the Zora Protocol
              </a>
            </li>            
          </ul>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Inspiration</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <a href="https://youtu.be/eim8REOYLzA">
                Future of the Digital World
              </a> - Balaji Srinivasan & Tim Ferriss            
            </li>
            <li className={utilStyles.listItem}>
            <a href="https://jacob.energy/hyperstructures.html">
                Hyperstructures
              </a> - Jacob Horne          
            </li>
            <li className={utilStyles.listItem}>
            <a href="https://dcbuilder.mirror.xyz/QX_ELJBQBm1Iq45ktPsz8pWLZN1C52DmEtH09boZuo0">
                The Ultimate Guide to L2s on Ethereum
              </a> - dcbuilder.eth         
            </li>           
          </ul>
        </section>
       </div> 

{/*  commenting out the correct way to do a fully integrated blog section, for if I ever want it
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>      
 */}

    </Layout>
  );
}