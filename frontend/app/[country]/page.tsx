import Link from "next/link";
import PopulationApexChart from "./_population-chart";
import { getCountryData } from "./actions";

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const { country } = params;

  const countryData = await getCountryData(country);
  const payload = countryData.data;

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center bg-neutral lg:px-[20%] md:px-[10%] px-[2%]">
      <div className="w-full h-36 flex justify-center items-center ">
        <h1 className="lg:text-5xl text-3xl bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text font-bold">
          {payload.name}
        </h1>
        <img
          className="lg:w-[48px] w-[36px] lg:h-[48px] h-[36px] ml-2"
          src={payload.flag}
        ></img>
      </div>
      <div className="w-full h-8 fex justify-start items-center">
        <h3 className="text-slate-400 font-semibold"> Borders with</h3>
      </div>
      <div className="w-full flex flex-row flex-wrap">
        {payload.borders.map((country, index) => {
          return (
            <Link
              key={index}
              href={`/${country.countryCode}`}
              className="w-40 h-16 m-2 rounded-lg flex items-center justify-center border-[1px] border-neutral-800 shadow-lg hover:scale-105 hover:border-primary duration-500"
            >
              <p className="text-xl text-center font-semibold text-slate-300">
                {country.commonName}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="w-full h-full bg-neutral relative flex justify-center items-center overflow-hidden">
        <PopulationApexChart
          population={payload.population}
        ></PopulationApexChart>
      </div>
    </div>
  );
}
