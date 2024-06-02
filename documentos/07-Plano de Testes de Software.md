# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento do cadastro do usuário.</td>
  <td>
   <ul>
    <li>RF-001:	Deverá ser possível se cadastrar na plataforma.</li>
   </ul>
  </td>
  <td>Verificar se é possível criar uma nova conta na plataforma.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Cadastro.</li>
    <li>Digitar corretamente o nome de usuário, e-mail e senha.</li>
    <li>Visualizar a página de login</li>
   </ol>
   </td>
  <td>Ao digitar os dados corretamente, o usuário deve ser redirecionado para a página de login</td>
  <td>Roger Marques</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do login</td>
  <td>
   <ul>
    <li>RF-002:	Deverá ser possível fazer login na plataforma.</li>
   </ul>
  </td>
  <td>Verificar se é possível fazer login na plataforma.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Login</li>
    <li>Digitar corretamente o e-mail e senha que foram cadastrados na plataforma.</li>
    <li>Visualizar a página Home.</li>
   </ol>
   </td>
  <td>Ao digitar os dados corretamente, o usuário deve ser redirecionado para a página Home</td>
  <td>Roger Marques</td>
 </tr>
</table>
