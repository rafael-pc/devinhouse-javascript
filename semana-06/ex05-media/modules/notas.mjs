export const notas = (nota1, nota2, nota3) => {
  const media = (nota1 + nota2 + nota3) / 3;
  const aluno = document.createElement("div");
  aluno.textContent = "Nota Aluno 1: " + media;
  document.body.appendChild(aluno);
  return media;
};
