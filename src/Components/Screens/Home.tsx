import React from "react";
import "../../Assets/chai-garam.png";
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
      <div className="flex flex-row">
        {" "}
        <div className="basis-1/2 p-4">
          <div className="text-3xl ">Why on Web3?</div>
          <div className="">
            The internet has unlocked unprecedented opportunities for
            collaboration and creation. Now web3 technology like open source
            protocols and decentralized blockchains give us the ability to take
            that co-creation to a new scale.
          </div>
        </div>
        <div className="basis-1/2">
          {" "}
          <div>
            <div className="text-2xl my-3"> Open</div>
            Open source code meets open economies. Build resilient projects,
            better coordination, and positive-sum outcomes.
          </div>
          <div>
            <div className="text-2xl my-3"> Empowering</div>
            <div>
              {" "}
              Growing networks with aligned incentives towards the wellbeing of
              each participant and the system as a whole.
            </div>
          </div>
          <div>
            <div className="text-2xl my-3"> Collaborative</div>

            <div>
              {" "}
              Through distributed funding and organizations, we build together
              toward our shared goals.
            </div>
          </div>
        </div>
      </div>
      <div><div className="flex flex-row">
        <div className="basis-1/3"><img src="./Assets/chai-garam.png" /></div>
        <div className="basis-1/3"><img src="" /></div>
        <div className="basis-1/3"><img src="" /></div>

      </div><div className="flex flex-row">
          <div className="basis-1/3"><img src="" /></div>
          <div className="basis-1/3"><img src="" /></div>
          <div className="basis-1/3"><img src="" /></div>

        </div><div className="flex flex-row">
          <div className="basis-1/3"><img src="" /></div>
          <div className="basis-1/3"><img src="" /></div>
          <div className="basis-1/3"><img src="" /></div>

        </div></div>
    </div>
  );
};

export default Home;
