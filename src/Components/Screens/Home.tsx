import React from "react";
import { Link } from "react-router-dom";
import chaiGaramImg from "../../Assets/chai-garam.png";
import crunchyBurgerImg from "../../Assets/crunchy-burger.png";
import desiSwagImg from "../../Assets/desi-swag.png";
import dosaPlaza from "../../Assets/dosa-plaza.png";
import hmCafe from "../../Assets/hmcafe.png";
import mym from "../../Assets/mym.jpg";
import nescafe from "../../Assets/nescafe.png";
import rollsMafia from "../../Assets/rollsMafia.png";
import subway from "../../Assets/subway.png";
import TokenLogo from "../../Assets/mr-token-logo.png";

const TypoGraphy = ({ head, body }: { head: string; body: string }) => {
  return (
    <>
      <div className="py-4">
        <h2 className="text-3xl font-semibold mb-2 text-lime-600 ">{head}</h2>
        <p className="text-cyan-400 text-xl">{body}</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <section className="px-4 md:px-0 md:max-w-screen-xl m-auto">
        <article className="my-12 text-center">
          <h1 className="font-bold text-5xl text-red-600">
            Manav Rachna <span className="text-green-600">Coin</span>
          </h1>
        </article>

        <article className="my-12">
          <div className="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="py-4">
                <h2 className="text-3xl font-semibold mb-2 text-lime-600 ">
                  What is Manav Rachna Coin?
                </h2>
                <p className="text-slate-100 text-xl">
                  Manav Rachna Coin is a digital currency that is used to pay
                  for goods and services at Manav Rachna University. It is a
                  decentralized digital currency without a central bank or
                  single administrator that can be sent from user to user on the
                  peer-to-peer Manav Rachna Coin network without the need for
                  intermediaries.
                </p>
              </div>

              <img
                src={TokenLogo}
                alt="MR token"
                width={"40%"}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-4 my-12">
          <div className="basis-1/3 md:basis-1/2 ">
            <TypoGraphy
              head={`Why on Web3?`}
              body={`The internet has unlocked unprecedented opportunities for collaboration and creation. Now web3 technology like open source protocols and decentralized blockchains give us the ability to take that co-creation to a new scale.`}
            />

            <Link
              to={"/launchpad"}
              className="text-white bg-lime-600 px-8 py-2 rounded hover:bg-lime-700">
              Open Launchpad
            </Link>
          </div>
          <div className="basis-1/3 md:basis-1/2">
            <TypoGraphy
              head={`Open`}
              body={`Open source code meets open economies. Build resilient projects, better coordination, and positive-sum outcomes.`}
            />
            <TypoGraphy
              head={`Empowering`}
              body={`Growing networks with aligned incentives towards the wellbeing of each participant and the system as a whole.`}
            />
            <TypoGraphy
              head={`Collaborative`}
              body={`Through distributed funding and organizations, we build together toward our shared goals.`}
            />
          </div>
        </article>

        <article className="my-12">
          <h2 className="text-4xl text-center font-semibold mb-4 text-white ">
            Manav Rachna Outlets
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
            <div className="hover:bg-cyan-600 ">
              <img className=" h-64 p-1 w-full " src={chaiGaramImg} alt="img" />
            </div>
            <div className="hover:bg-cyan-600 ">
              <img className=" h-64 p-1 w-full " src={subway} alt="img" />
            </div>
            <div className=" hover:bg-cyan-600">
              <img className=" h-64 p-1 w-full " src={rollsMafia} alt="img" />
            </div>
            <div className="hover:bg-cyan-600 ">
              <img className=" h-64 p-1 w-full " src={hmCafe} alt="img" />
            </div>
            <div className="hover:bg-cyan-600 ">
              <img className=" h-64 p-1 w-full " src={nescafe} alt="img" />
            </div>
            <div className="hover:bg-cyan-600 ">
              <img className=" h-64 p-1 w-full " src={mym} alt="img" />
            </div>
            <div className=" hover:bg-cyan-600">
              <img className=" h-64 p-1 w-full " src={dosaPlaza} alt="img" />
            </div>
            <div className="hover:bg-cyan-600 ">
              <img className=" h-64 p-1 w-full " src={desiSwagImg} alt="img" />
            </div>
            <div className="hover:bg-cyan-600 ">
              <img
                className=" h-64 p-1 w-full "
                src={crunchyBurgerImg}
                alt="img"
              />
            </div>
          </div>
        </article>
      </section>
      <div id="copyright">
        <p className="m-0 p-0">
          Copyright © 2022 MR Coin. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Home;
