import React from "react"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"

const FeatureList = [
  {
    title: "React Hook Forms Wrapper",
    Svg: require("../../static/img/undraw_fill_form_re_cwyf.svg").default,
    description: (
      <>
        Build forms faster with validation, without tears. Available elements
        listed
        <a
          style={{ marginLeft: "0.5rem" }}
          href='https://ui5-react-examples.bowbridge.net/'
          target='_blank'
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    title: "Custom Hooks",
    Svg: require("../../static/img/hooks.svg").default,
    description: (
      <>These hooks help to handle Modals and Popovers the easiest way.</>
    ),
  },
  {
    title: "Typescript Support",
    Svg: require("../../static/img/typescript_logo.svg").default,
    description: (
      <>
        This Library is written in Typescript, and provides first-class
        Typescript support.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
