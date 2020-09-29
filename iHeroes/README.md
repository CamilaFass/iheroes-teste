<h2>Relatório do Desenvolvimento do iHeroes</h2>
Neste ReadMe irei explicar como foi feito o desafio, quais os obstáculos, tecnologias, utilizadas, etc. Separado em front-end e back-end para melhor exemplificar.
<br>
<br>
<h2>Backend</h2>
Utilizei: node.JS para o desenvolvimento e MongoDB/Mongoose para o banco de dados.

As instruções do desafio da ZRP pedia que o sistema recebesse as informações das ocorrências por um socket, encaminhasse automaticamente o herói mais adequado de acordo com o ranking e o nível da ameaça informada na ocorrência, tal ação deveria ficar registrada no banco de dados, mas também deve ser registrado quando o herói concluísse a missão. Para atender a essa solicitação, eu dividi as informações nos banco de dados em 3 entes: Herói (Hero), Ocorrência (Occurrence) e o Registro da Atividade do Herói (Herolog).
