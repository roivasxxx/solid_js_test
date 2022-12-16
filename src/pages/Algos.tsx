import PageTemplate from "./PageTemplate";
import { Link } from "@solidjs/router";

const Algos = () => {
  return (
    <PageTemplate>
      <h1 class="text-headertext text-xl w-full border-b border-borderclr mb-2">
        Info
      </h1>
      <div class="text-contenttext">
        <p>
          Aplikace nabízí vybrané implementované algoritmy probírané v rámci
          teorie grafů
        </p>
        <p>
          Algoritmy budou průběžně, do předem neurčené doby, doplňovány, poté
          bude vývoj aplikace ukončen, maximálně bude docházet k úpravě/opravě
        </p>
        <br />
        <p>Každý implementovaný algoritmus nabízí možnost</p>
        <ul class="list-inside list-dics">
          <li>zadat problém</li>
          <li>zobrazit řešení problému</li>
          <li>zobrazit kroky řešení problému</li>
          <li>seznam odkazů zabývající se stejnou problematikou</li>
        </ul>
        <br />
        <p>Seznam implementovaných algoritmů</p>
        <ul class="list-inside list-dics">
          <li>
            <Link href="/algos/#" class="text-contenttextlink hover:underline">
              hledání artikulací a bloků
            </Link>
          </li>
          <li>
            <Link href="/algos/#" class="text-contenttextlink hover:underline">
              Maďarský algoritmus
            </Link>
          </li>
          <li>
            <Link href="/algos/#" class="text-contenttextlink hover:underline">
              hledání minimální kostry
            </Link>
          </li>
          <li>...</li>
        </ul>
        <br />
        <p>
          {"V případě chyby/návrhu na vylepšení aplikace, neváhejte využít "}
          <Link href="/algos/#" class="text-contenttextlink hover:underline">
            kontakt
          </Link>
        </p>
      </div>
    </PageTemplate>
  );
};

export default Algos;
