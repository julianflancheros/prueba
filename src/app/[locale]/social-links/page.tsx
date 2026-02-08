import Image from 'next/image';
import styles from './styles.module.css';

const links = [
  { label: 'GitHub', href: 'https://www.github.com/julianflancheros' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julianflancheros' },
  { label: 'Web site', href: 'https://julianflancheros.js.org' },
  { label: 'Instagram', href: 'https://www.instagram.com/julianflancheros' },
];

export default function SocialLinksPage() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <Image
          className={styles.avatar}
          src="/me.jpg"
          alt="Julian F. Lancheros"
          width={96}
          height={96}
        />
        <h1 className={styles.name}>Julian F. Lancheros</h1>
        <p className={styles.location}>Bogotá, Colombia</p>
        <p className={styles.phrase}>
          Agricultural Engineer: Designing systems to help people and transform the industry.
        </p>

        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.label} className={styles.linkButton} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          Coded by{' '}
          <a href="https://www.linkedin.com/in/julianflancheros">Julian F. Lancheros</a>
        </div>
      </div>
    </section>
  );
}
