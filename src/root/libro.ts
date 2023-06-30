export class Libro {
  //proprietà della classe
  autore: string;
  titolo: string;
  posizione: string;
  nominativo: string;
  //prende proprietà 
  constructor(
    autore: string,
    titolo: string,
    posizione: string,
    nominativo: string
  ) {
    //definisce proprietà
    this.autore = autore;
    this.titolo = titolo;
    this.posizione = posizione;
    this.nominativo = nominativo;
  }
}

//quando istanzio nuovo oggetto definirò anche le sue proprietà