import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Workshop beim SVW',
    link: 'docs/intro',
    Svg: require('@site/static/img/logo-ws.svg').default,
    description: (
      <>
        Das Workshop-Kapitel gibt eine Übersicht über den Ablauf des Workshops. Der mag sich ändern,
        aber das ist eine sinnvolle Reihenfolge, verteilt über 3 Trainingseinheiten.
      </>
    ),
  },
  {
    title: 'Lichess',
    link: 'docs/lichess',
    Svg: require('@site/static/img/lichess.svg').default,
    description: (
      <>
        Lichess kennt heute jeder, als ich dabei einstieg, hatte der Site zu Hochzeiten 4.000
          parallele Nutzer. Inzwischen sind es jeden Tag zu Hochzeiten über 100.000. Und Lichess
          hat für den Preis (0 Euro) unschlagbare Angebote ...
      </>
    ),
  },
  {
    title: 'Kommunikation',
    link: '/docs/communication/generell',
    Svg: require('@site/static/img/discord-icon.svg').default,
    description: (
      <>
        Für die Online-Kommunikation stehen vier Werkzeuge zur Verfügung. Jitsi ist die aktuell
        primär verwendete Plattform; außerdem finden Sie hier Anleitungen zu{' '}
        <Link to="/docs/communication/discord">Discord</Link>,{' '}
        <Link to="/docs/communication/jitsi">Jitsi</Link>,{' '}
        <Link to="/docs/communication/teams">Microsoft Teams</Link> und{' '}
        <Link to="/docs/communication/zoom">Zoom</Link>.
      </>
    ),
  },
 {
  title: 'Schachunterricht Online',
  link: 'docs/training',
  Svg: require('@site/static/img/8_amigos-jugano-ajedrez_By_DG-RA.svg').default,
    description: (
    <>
      Schachunterricht online war zu Beginnn eine Krücke, hat sich aber als
      sehr wertvoll erwiesen. Einige Elemente setzen wir sogar jetzt im Offline-Unterricht ein.
    </>
    ),
  },
  {
    title: 'Übungen',
    link: 'docs/uebungen',
    Svg: require('@site/static/img/online-presentation.svg').default,
    description: (
    <>
      Wir machen praktische Übungen vieler der vorgestellten Möglichkeiten als Lernkontrolle für die Teilnehmer.
    </>
    ),
  },
 
];

function Feature({title, link, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Link to={link}>{title}</Link></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
