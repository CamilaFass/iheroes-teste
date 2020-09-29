<h2>Relatório do Desenvolvimento do iHeroes</h2>
Neste ReadMe irei explicar como foi feito o desafio, quais os obstáculos, tecnologias, utilizadas, etc. Separado em front-end e back-end para melhor exemplificar.
<br>
<strong>Herói</strong>
Modelo do registro:
<br>
id: * Identificação gerada pelo banco de dados *
<br>
name: * Nome do herói *
<br>
class: [ S, A, B, C ]
<br>
avaible: [ true, false ]
<br>
<strong>Ocorrência</strong>
<p>precisamos de um campo informando a situação atual da ocorrência, que serão três: pendente, em atendimento e concluído.</p>
<br>
Modelo do registro:
<br>
id: * Identificação gerada pelo banco de dados *
<br>
location: Json{ longitude, latitude }
<br>
dangerLevel: [ God, Dragon, Tiger, Wolf ]
<br>
monsterName: * Nome do monstro *
<br>
date: * Data que a ameaça surgiu *
<br>
state: [ pending, attending, done ]
<br>
<strong>Registro da Atividade do Herói</strong>
É necessário identificar QUEM foi encaminhado para a ocorrência e quando a ameaça foi finalizada, então a ocorrência recebe um ID de registro e um outro campo informando o herói designado, com ID e nome. Além de outro campo para data, para saber quando foi concluída.
<br>
Modelo do registro:
<br>
id: * Identificação gerada pelo banco de dados *
<br>
hero: Json{ id, nome }
<br>
avaible: [ true, false ]
<br>
date: * Data do registro *
<br>
occurrence: id da ocorrência
<br>
<h2>Preferência do Herói</h2>
<br>
Cada herói é escolhido preferencialmente conforme sua classe e o nível de risco. Para isso foram criados dangerPoints.
<br>
<h2>DangerPoints</h2>
<br>
Cada nível de perigo receberá uma quantidade de pontos (dangerPoints).
<br>
Os dangerPoints ficam então da seguinte forma, de acordo com a o nível de perigo:
<br>
God: 8
<br>
Dragon: 4
<br>
Tiger: 2
<br>
Wolf: 1
<br>
E os pontos que cada herói desconta de acordo com sua classe ficam da seguinte forma:
<br>
S: 8
<br>
A: 4
<br>
B: 2
<br>
C: 1
<br>
<h2>Backend</h2>
Utilizei: node.JS para o desenvolvimento e MongoDB/Mongoose para o banco de dados.
<br>
<h2>Frontend</h2>
Utilizei: JavaScript, React, Bootstrap, Redux, Axios.
<br>
<h2>Desafios</h2>
Achei o teste bem desafiador, contei com muita pesquisa e auxílio de colegas, principalmente para parte do backend além de Redux e Axios, que são o que estou começando a aprender.
