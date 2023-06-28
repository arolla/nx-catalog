import { useState, useEffect, useCallback } from "react";
import Item from "./Item";
import Navigation from "./Navigation";
export default function Form(props) {
  let [valueInput, setValue] = useState("");
  let [valueInputTitre, setTitre] = useState("");
  let [idVal, setId] = useState(-1);
  let [textp, setText] = useState([
    { titre: "bonjour1", text: "hehe" },
    { titre: "bonjour2", text: "hehe" },
    { titre: "bonjour3", text: "hehe" },
  ]);
  ///////////////////////////
  const [load, setLoad] = useState(false);

  let attendre = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
    console.log(load);
  };
  useEffect(() => {
    attendre();
  }, []);
  ////////////////////////Rechercher/////////////
  let recherche = async (e) => {
    e.preventDefault();

    if (valueInput === "") {
      fetchAPI();
    } else {
      let f = await fetchAPI();
      console.log(f);
      let tab = f.message.filter((elemt) => elemt.text.includes(valueInput));
      setText(tab);
      console.log("bb");
    }
  };
  ////////////////////////////////////////////
  ///////////////////fectchApi/////////////////////////
  const fetchAPI = useCallback(async () => {
    const response = await fetch("https://memo.krissclotilde.com/tout/tache");
    const resbis = await response.json();
    console.log(resbis.message);
    setText(resbis.message);
    console.log("aa");
    return resbis;
  }, [setText]);

  /////////////////////////////////////////
  ///////////////remonter au parent//////////////////////////////iddata/////////
  let idchange = (data) => {
    setId(data);
  };
  //////////////////////////appel api en debut
  useEffect(() => {
    fetchAPI();
  }, []);
  ////////////////////////////////////////supprimme des tache
  let del = (e, data) => {
    e.preventDefault();
    fetchdelete(data);
  };
  ///////////////////////////////////////////////////////////remonter le texte
  let textebis = (data) => {
    setValue(data);
  };
  /////////////////////////////
  ///////////////////////////appel delete
  let fetchdelete = useCallback(async (data) => {
    const response = await fetch(
      "https://memo.krissclotilde.com/delete/tache",
      {
        method: "POST",
        body: JSON.stringify({
          id: parseInt(data, 10),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resbis = await response.json();
    console.log(idVal);
    console.log(resbis);
    fetchAPI();
  });
  //////////////////////insert tache
  let fetchCreer = useCallback(async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://memo.krissclotilde.com/insert/tache",
      {
        method: "POST",
        body: JSON.stringify({
          msg: valueInput,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resbis = await response.json();
    fetchAPI();
  });
  ////////////////////update////////////
  let fetchAPIupdate = useCallback(async () => {
    const response = await fetch(
      "https://memo.krissclotilde.com/update/tache",
      {
        method: "POST",
        body: JSON.stringify({
          msg: valueInput,
          id: idVal,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resbis = await response.json();
    fetchAPI();
    console.log(valueInput);
    console.log(idVal);
    console.log(JSON.stringify(resbis));
  });
  ////////////////////////input change value
  let Valuechange = (e) => {
    let a = e.target.value;
    console.log(a);
    setValue(a);

    return a;
  };
  /////////////////////////modifier
  let modifier = (e) => {
    e.preventDefault();
    fetchAPIupdate();
    setValue("");
    setTitre("");
  };
  /////////////////////////
  
  return (
    
    <>
    { !load? <div>
          <Navigation></Navigation>
          <form>
            <label id="idLabel">
            id:{idVal} </label>
        <div className="container">

          <input value={valueInput} onChange={(e) => Valuechange(e)} />{" "}
          <button onClick={modifier}>modifier</button>
          <button onClick={fetchCreer}>creer</button>
          <button onClick={recherche}>Rechercher</button>
        </div>
      </form>
      <div className="container2">
        {textp.map((item, index) => {
          return (
            <Item
              del={del}
              changetext={textebis}
              updatefunc={idchange}
              titre={item.titre}
              text={item.text}
              id={item.id}
            ></Item>
          );
        })}
      </div></div>
: <h1>Chargement...</h1> }
      
    </>
  );
}
