

"use client"

//import { useSearchParams } from "next/navigation";
import { formAction } from "./Action/formData";

export default function Home() {

 // const query=useSearchParams();
  //const name1=query.get("name1");
  //const id1=query.get("id1");

  return (
    <div>
      home page
      <form action={formAction}>
      
<input type="text" name="name1" placeholder="data"  className="bg-slate-100 border-4 shadow-black m-5"/>

<br/>
<input type="number" name="id1" placeholder="id"  className="bg-slate-100 border-4 shadow-black m-5"/>

<input type="submit" name="submit" placeholder="submit"  className="bg-slate-100 border-4 shadow-black m-5"/>

      </form>
      <p>

     
      </p>

        </div>
      
  );
}
