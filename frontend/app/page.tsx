import Link from "next/link";
import { getCountries } from "./actions";

export default async function Page() {
  const countries = await getCountries();
  return (
    <div className="w-screen flex flex-col justify-start items-center bg-neutral lg:px-[20%] md:px-[10%] overflow-x-hidden">
      <div className="w-full h-36 flex justify-center items-center">
        <h1 className="lg:text-5xl text-3xl bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text font-bold">
          Country Info App
        </h1>
      </div>
      <ul className="w-full flex flex-col px-[10%] text-center font-semibold text-slate-300">
        {countries.data.map((country, index) => {
          return (
            <li
              key={index}
              className="w-full h-12 flex justify-center items-center my-2 border-[1px] border-neutral-900 rounded-lg shadow-lg hover:scale-105 hover:border-primary duration-500"
            >
              <Link
                className="w-full h-full flex flex-row justify-center items-center"
                href={`/${country.countryCode}`}
              >
                <p className="text-center">{country.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
