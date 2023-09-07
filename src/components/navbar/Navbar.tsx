import Link from "next/link";

//import styles
import styles from "./styles.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <svg
          width="41"
          height="28"
          viewBox="0 0 41 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 14C30 21.3727 25.124 27 19.5 27C13.876 27 9 21.3727 9 14C9 6.62732 13.876 1 19.5 1C25.124 1 30 6.62732 30 14Z"
            stroke="#141414"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.8536 25.4124C25.255 25.9198 24.6147 26.3621 23.9402 26.7307C25.4319 27.5457 27.0915 28.0002 28.8402 28.0002C35.3351 28.0002 40.6003 21.7321 40.6003 14.0001C40.6003 6.26805 35.3351 0 28.8402 0C27.0915 0 25.4319 0.454405 23.9402 1.26944C24.6147 1.63801 25.255 2.08033 25.8536 2.58773C26.8097 2.20435 27.8169 2 28.8402 2C33.918 2 38.6003 7.03174 38.6003 14.0001C38.6003 20.9684 33.918 26.0002 28.8402 26.0002C27.8169 26.0002 26.8097 25.7958 25.8536 25.4124Z"
            fill="#141414"
          />
          <ellipse cx="11.5" cy="14" rx="11.5" ry="14" fill="#141414" />
        </svg>
        <p>SOPA</p>
      </div>
      <div className={styles.nav_links}>
        <Link href={"/"}>About</Link>
        <span></span>
        <Link href={"/"}>Women</Link>
        <span></span>
        <Link href={"/"}>Men</Link>
        <span></span>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className={styles.right}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
