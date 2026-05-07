import Image from 'next/image';
import {
  RiWhatsappLine,
  RiMailLine,
  RiPhoneLine,
  RiLinkedinBoxLine,
  RiGlobalLine,
  RiSunLine,
} from 'react-icons/ri';
import styles from './styles.module.css';

const contacts = [
  {
    label: 'Phone',
    value: '+57 321 916 7951',
    href: 'tel:+573219167951',
    icon: RiPhoneLine,
  },
  {
    label: 'Whatsapp',
    value: 'julianflancheros',
    href: 'https://api.whatsapp.com/send?phone=573219167951',
    icon: RiWhatsappLine,
  },
  {
    label: 'LinkedIn',
    value: 'julianflancheros',
    href: 'https://www.linkedin.com/in/julianflancheros',
    icon: RiLinkedinBoxLine,
  },
];

export default function BusinessCardPage() {
  return (
    <section className={styles.page}>
      <div>
        <div className={styles.card}>
          <input
            className={styles.flipToggle}
            type="checkbox"
            id="business-card-toggle"
            aria-label="Flip business card"
          />

          <div className={styles.cardInner}>
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
              <p className={styles.subheading}>Digital Business Card</p>
              <h1 className={styles.headline}>Julian F. Lancheros</h1>
              <p className={styles.tagline}>
                Choose only one master,
                <br />
                Nature.
              </p>
              <div className={styles.flipHint}>Hover or tap to flip the card.</div>
            </div>

            <div className={`${styles.cardFace} ${styles.cardBack}`}>
              <div className={styles.profile}>
                <Image
                  className={styles.avatar}
                  src="/me.jpg"
                  alt="Julian F. Lancheros"
                  width={72}
                  height={72}
                />
                <div>
                  <div className={styles.subheading}>Profile</div>
                  <div className={styles.headline}>Julian F. Lancheros</div>
                </div>
              </div>

              {/* <p className={styles.bio}>
                I&apos;m a student of Agronomic Engineering at the National University and TIC
                Mission at the UTP in Colombia. I&apos;m specializing in data analysis,
                Geographic Information Systems (GIS), and responsive web and mobile applications.
              </p> */}

              <div className={styles.contactList}>
                {contacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} className={styles.contactCard} href={item.href}>
                      <div className={styles.contactIcon}>
                        <Icon aria-hidden />
                      </div>
                      <div>
                        <div className={styles.contactLabel}>{item.label}</div>
                        <div className={styles.contactValue}>{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className={styles.actions}>
                <a className={styles.actionButton} href="/JulianLancheros.vcf">
                  Save Contact
                </a>
                <a className={`${styles.actionButton} ${styles.secondaryButton}`} href="/me.jpg">
                  View Photo
                </a>
              </div>
            </div>
          </div>
        </div>

        <label className={styles.flipButton} htmlFor="business-card-toggle">
          <RiSunLine aria-hidden />
          Flip Card
        </label>
      </div>
    </section>
  );
}
