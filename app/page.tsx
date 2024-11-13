

"use client"

import { useSearchParams } from "next/navigation";
export default function Home() {

  const query=useSearchParams();
  const name1=query.get("name1");
  const id1=query.get("id");

  return (
    <div>
      home page
      <form action={"/"}>
      
<input type="text" name="name1" placeholder="data"  className="bg-slate-100 border-4 shadow-black m-5"/>

<br/>
<input type="number" name="id" placeholder="id"  className="bg-slate-100 border-4 shadow-black m-5"/>

<input type="submit" name="submit" placeholder="submit"  className="bg-slate-100 border-4 shadow-black m-5"/>

      </form>
      <p>

      {name1}
      {id1}
      </p>

        </div>
      
  );
}
