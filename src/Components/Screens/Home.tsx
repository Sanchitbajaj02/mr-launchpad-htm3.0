import React from "react";

import chaiGaramImg from "../../Assets/chai-garam.png";
import crunchyBurgerImg from "../../Assets/crunchy-burger.png";
import desiSwagImg from "../../Assets/desi-swag.png";
import dosaPlaza from "../../Assets/dosa-plaza.png";
import hmCafe from "../../Assets/hmcafe.png";
import mym from "../../Assets/mym.jpg";
import nescafe from "../../Assets/nescafe.png";
import rollsMafia from "../../Assets/rollsMafia.png";
import subway from "../../Assets/subway.png";
const Home = () => {
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl text-center mt-0 mb-2 text-red-600">
        Manav Rachna{" "}
        <span className="font-medium leading-tight text-5xl mt-0 mb-2 text-green-600">
          Coin
        </span>
      </h1>
      <div className="auto-rows-auto">
        {/* <div className="auto-cols-auto">
          Oh My GOD! This month is tough for me Explore the crypto world with
          Manav Rachna coin. Ha ha ... I am not joking
        </div> */}
        {/* <div className="auto-cols-auto">
          <table className="  border border-slate-500 ...">
            <thead>
              <tr>
                <td className="border px-12 py-4  border-slate-600  ...">
                  Reliability
                </td>
                <td className="border px-12 py-4 border-spacing-x72 border-slate-600  ...">
                  Security
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border  px-12 py-4border-spacing-x72 border-slate-700  ...">
                  Low Fees
                </td>
                <td className="border px-12 py-4 border-spacing-x72 border-slate-700  ...">
                  Scalability
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
      <div className="flex flex-row px-12  ">
        {" "}
        <div className="basis-1/2 py-4 ">
          <div className="text-3xl text-lime-600 ">Why on Web3?</div>
          <div className="text-cyan-500">
            The internet has unlocked unprecedented opportunities for
            collaboration and creation. Now web3 technology like open source
            protocols and decentralized blockchains give us the ability to take
            that co-creation to a new scale.
          </div>
        </div>
        <div className="basis-1/2">
          {" "}
          <div>
            <div className="text-2xl my-3 text-lime-600"> Open</div>
            <div className="text-cyan-500"> Open source code meets open economies. Build resilient projects,
              better coordination, and positive-sum outcomes.</div>
          </div>
          <div>
            <div className="text-2xl my-3 text-lime-600"> Empowering</div>
            <div className="text-cyan-500">
              {" "}
              Growing networks with aligned incentives towards the wellbeing of
              each participant and the system as a whole.
            </div>
          </div>
          <div>
            <div className="text-2xl my-3 text-lime-600"> Collaborative</div>

            <div className="text-cyan-500">
              {" "}
              Through distributed funding and organizations, we build together
              toward our shared goals.
            </div>
          </div>
        </div>
      </div>
      <div className=""><div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
        <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={chaiGaramImg} alt="img" /></div>
        <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={subway} alt="img" /></div>
        <div className=" hover:bg-cyan-600"><img className=" h-64 p-1 w-full " src={rollsMafia} alt="img" /></div>

      </div><div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={hmCafe} alt="img" /></div>
          <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={nescafe} alt="img" /></div>
          <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={mym} alt="img" /></div>

        </div><div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 ">
          <div className=" hover:bg-cyan-600"><img className=" h-64 p-1 w-full " src={dosaPlaza} alt="img" /></div>
          <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={desiSwagImg} alt="img" /></div>
          <div className="hover:bg-cyan-600 "><img className=" h-64 p-1 w-full " src={crunchyBurgerImg} alt="img" /></div>

        </div></div>
    </div>
  );
};

export default Home;
