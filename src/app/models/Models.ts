
export interface Prova {
  id?: number;
  nome?: string
  descricao?: string
  duracao?: number
  usuario?: Usuario
  questoes?: Questao[]
  instituicao?: string
  categoria?: CategoriaProva
}


export interface Questao {

  id?: number;
  instituicao?: string;
  ano?: Date | undefined;
  texto?: string;
  imagem?: string;
  dificuldade?: number;
  alternativas?: Alternativa[];
  resposta?: Alternativa;
  categoria?: CategoriaQuestao;
  criador?: Usuario;
}

export interface CategoriaQuestao {
  id: number
  titulo: string
  descricao: string
  questoes: Questao[]
}

export interface CategoriaProva {
  id: number
  titulo: string
  descricao: string
  provas: Prova[]
}

export interface Alternativa {

  id: number;
  texto: string;
  foto: string;
  questao: Questao;
  isResposta: boolean;
}

export interface Usuario {

  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  tipo: string;
  questoes: Questao[];
  provas: Prova[];

}


export interface ResponsePageable
{
  content: any[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any[];
  size: number;
  sort: number;
  totalElements: number;
  totalPages: number;
}





interface ResponseData {
  content: any[]; // Aqui você define a estrutura do objeto retornado pela requisição
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
