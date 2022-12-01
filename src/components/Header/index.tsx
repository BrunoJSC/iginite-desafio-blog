import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  const route = useRouter();
  return (
    <Link href="/">
      <header className={styles.header}>
        <Image width={240} height={25} src="/logo.svg" alt="Logo" />
      </header>
    </Link>
  );
}
