// import Link from "next/link";
import type { NextPage } from "next";
// import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-40">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Nota Pay!</span>
          </h1>
          <p className="text-center text-lg">
            The future of programmable crypto payments! Imagine a world where your payments arent just transactions, but
            smart, programmable assets. That world is here. Welcome to NotaPay 😎
          </p>
          <h4 className="text-center mb-4">
            <span className="block text-2xl font-bold">🤔 How it works 🤔</span>
          </h4>
          <p className="text-left text-lg">
            When you send a payment with NotaPay, a payment NFT is sent to the recipient as a claim for the escrowed
            tokens. Each payment NFT (Notas) references a hook that defines who can own it and how it can
            recieve/release funds.
          </p>
          <h4 className="text-center mb-4">
            <span className="block text-2xl font-bold">✨ Benefits ✨</span>
          </h4>
          <div>
            <li className="text-left text-lg">
              🧾 Notas: Fully Onchain, Extensible, Composable, and Transferable payment agreements 🤓
            </li>
            <li className="text-left text-lg">
              🏦 Nota Registrar: Immutable & Non-upgradable, Limited Governance, Simple to Understand and Easy to
              Integrate 🔥
            </li>
            <li className="text-left text-lg">🪝 Hooks: Simple, extensible, revenue sharing and generating 🤑</li>
          </div>
          <h4 className="text-center mt-8 mb-4">
            <span className="block text-2xl font-bold">🚨 DISCLAIMER 🚨</span>
          </h4>
          <p className="text-left text-lg">
            Denota Protocol has not been audited which means it may contain bugs that can result in total loss of
            escrowed (read: your) funds. Only use funds you are comfortable losing. Since audits are expensive and
            interest has been hard to guage so far, getting an audit is TBD until that changes.
          </p>
        </div>

        {/* <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12"> */}
        {/* <div className="flex justify-center items-center gap-12 flex-col sm:flex-row"> */}
        {/* <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl"> */}
        {/* <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
