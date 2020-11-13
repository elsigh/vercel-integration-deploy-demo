import Head from "next/head";
import styles from "../styles/Home.module.css";

const environments = ["production", "preview", "development"];

const getEnvKey = (target) => {
  return `DEMO_${target}`;
};

export async function getStaticProps() {
  let props = {};
  {
    environments.map((target) => {
      const key = getEnvKey(target);
      props[key] = process.env[key] || "Not set";
    });
  }
  return { props };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel Integration Deploy Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vercel Integration Deploy Demo</h1>
        <br />
        <br />
        <table className={styles.table} cellPadding="5">
          <thead>
            <tr>
              <th>Production Env</th>
              <th>Preview Env</th>
              <th>Development Env</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {environments.map((target) => {
                return (
                  <td key={target}>
                    {getEnvKey(target)}: {props[getEnvKey(target)]}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
