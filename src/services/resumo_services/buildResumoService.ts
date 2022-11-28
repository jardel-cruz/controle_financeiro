import { Categories } from "../../types/despesasTypes.js";
import {
  calcValueDocumentByCategory,
  calcValueOfDocument,
} from "../../utils/callbacks.js";
import { listDespesaByMonthService } from "../despesas_services/listDespesasByMonthService.js";
import { listReceitaByMonthService } from "../receitas_services/listReceitaByMonthService.js";

interface ListReceitaByMonth {
  year: string;
  month: string;
}

export const buildResumo = async ({ month, year }: ListReceitaByMonth) => {
  const despesas = await listDespesaByMonthService({ month, year });
  const receitas = await listReceitaByMonthService({ month, year });

  const totalValueDespesas = despesas.reduce(calcValueOfDocument, 0);
  const totalValueReceitas = receitas.reduce(calcValueOfDocument, 0);

  const totalByCategory = {
    [Categories.outras]: despesas.reduce(
      calcValueDocumentByCategory(Categories.outras),
      0
    ),
    [Categories.alimentação]: despesas.reduce(
      calcValueDocumentByCategory(Categories.alimentação),
      0
    ),
    [Categories.educação]: despesas.reduce(
      calcValueDocumentByCategory(Categories.educação),
      0
    ),
    [Categories.imprevistos]: despesas.reduce(
      calcValueDocumentByCategory(Categories.imprevistos),
      0
    ),
    [Categories.lazer]: despesas.reduce(
      calcValueDocumentByCategory(Categories.lazer),
      0
    ),
    [Categories.moradia]: despesas.reduce(
      calcValueDocumentByCategory(Categories.moradia),
      0
    ),
    [Categories.saúde]: despesas.reduce(
      calcValueDocumentByCategory(Categories.saúde),
      0
    ),
    [Categories.transporte]: despesas.reduce(
      calcValueDocumentByCategory(Categories.transporte),
      0
    ),
  };

  return {
    balance: totalValueDespesas + totalValueReceitas,
    totalValueDespesas,
    totalValueReceitas,
    totalByCategory,
  };
};
