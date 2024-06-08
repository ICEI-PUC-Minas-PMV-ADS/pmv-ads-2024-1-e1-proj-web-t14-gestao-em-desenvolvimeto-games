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
    <li>Clicar em "Criar Conta"</li>
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
    <li>Clicar em "Entrar"</li>
    <li>Visualizar a página Home.</li>
   </ol>
   </td>
  <td>Ao digitar os dados corretamente, o usuário deve ser redirecionado para a página Home</td>
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
  <td>CT-03: Verificar o funcionamento da página para adicionar um ativo digital.</td>
  <td>
   <ul>
    <li>RF-003:	Deverá ser possível adicionar novos ativos digitais.</li>
   </ul>
  </td>
  <td>Verificar se é possível adicionar novos ativos digitais na plataforma.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer login na plataforma.</li>
    <li>Na página Home, localizar e clicar no botão "Adicionar Ativo".</li>
    <li>Preencher os campos com os dados corretamente.</li>
    <li>Clicar no botão "Adicionar"</li>
    <li>Na página Home de volta, visualizar o novo ativo adicionado.</li>
   </ol>
   </td>
  <td>Ao adicionar os dados referentes ao novo ativo e clicando no botão "Adicionar", o usuário deve ser redirecionado para a página Home</td>
  <td>Henrique Chamone</td>
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
  <td>CT-04: Verificar o funcionamento da página para adicionar uma categoria.</td>
  <td>
   <ul>
    <li>RF-007:	Deverá ser possível adicionar novas categorias.</li>
   </ul>
  </td>
  <td>Verificar se é possível adicionar novas categorias na plataforma.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer login na plataforma.</li>
    <li>Na página Home, localizar e clicar no botão "Adicionar Categorias".</li>
    <li>Preencher o campo com o nome da nova categoria.</li>
    <li>Clicar no botão "Adicionar"</li>
    <li>Na página Home de volta, visualizar a nova categoria adicionada.</li>
   </ol>
   </td>
  <td>Ao adicionar o nome da nova categoria e clicar no botão "Adicionar", o usuário deve ser redirecionado para a página Home</td>
  <td>Henrique Chamone</td>
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
  <td>CT-05: Verificar o funcionamento da tela de perfil do usuário.</td>
  <td>
   <ul>
    <li>RF-008:	Deverá ser possível verificar os dados
de cadastro do usuário através da tela de
perfil.</li>
   </ul>
  </td>
  <td>Verificar se é possível visualizar as informações do perfil do usuário na plataforma.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
   <li>Visualizar a página de Login.</li>
    <li>Digitar corretamente e-mail e senha do usuário.</li>
    <li>Clicar em "Entrar"</li>
    <li>Visualizar a página Home</li>
    <li>Clicar no ícone de perfil no canto superior direito.</li>
    <li> Visualizar a tela de perfil do usuário.</li>
   </ol>
   </td>
  <td>Ao clicar no ícone no canto superior direito, deverá ser encaminhado para a tela de perfil do usuário. </td>
  <td> Darem Adsom Rocha</td>
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
  <td>CT-06: Verificar o funcionamento da tela de edição de perfil do usuário.</td>
  <td>
   <ul>
    <li>RF-12:	Deverá ser possível alterar os dados
do perfil do usuário através da tela de
edição.</li>
   </ul>
  </td>
  <td>Verificar se é possível alterar as informações do perfil do usuário na plataforma.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
   <li>Visualizar a página de Login.</li>
    <li>Digitar corretamente e-mail e senha do usuário.</li>
    <li>Clicar em "Entrar"</li>
    <li>Visualizar a página Home</li>
    <li>Clicar no ícone de perfil no canto superior direito para acessar a tela de perfil do usuário.</li>
    <li>Na tela de perfil do usuário, clique em "alterar informações".</li>
   <li> Vizualizar a tela de edição de perfil.</li>
   <li>Altere os dados desejados e clique em "Editar".</li>
   <li>Vizualize a tela de perfil já com os dados alterados.</li>
   </ol>
   </td>
  <td>Ao clicar na tecla "Editar" deve ser encaminhado para a tela de perfil do usuário com os dados já alterados. </td>
  <td> Darem Adsom Rocha</td>
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
         <td>CT-06: Verificar o funcionamento da Tela Inicial.</td>
         <td>
          <ul>
            <li>RF-04	Será possível visualizar as miniaturas dos ativos digitais.</li>
            <li>RF-05	Será possível acessar as miniaturas dos ativos digitais e visualizar detalhes sobre eles após clicar sobre os mesmos.</li>
            <li>RF-06	Deverá ser possível filtrar os ativos digitais por categorias como texturas, sprites, animações etc.</li>
            <li>RF-09	Será possível ter acesso a recursos que facilitem a comunicação entre os membros da equipe, como comentários integrados aos próprios ativos.</li>
            <li>RF-10	Deverá ser possível mudar o status dos ativos para: A fazer, em andamento e finalizado.</li>
            <li>RF-11	Será possível gerar um relatório demonstrando todos os status dos ativos digitais do projeto.</li>
          </ul>
         </td>
         <td>Verificar se todos os componentes e funcionalidades da tela inicial estão corretos e funcionais</td>
         <td>
          <ol>
           <li>Acessar o navegador.</li>
           <li>Informar o endereço do site.</li>
           <li>Visualizar a página de Login.</li>
           <li>Digitar corretamente e-mail e senha do usuário.</li>
           <li>Clicar em "Entrar"</li>
           <li>Visualizar a página Home.</li>
           <li>Visualizar as miniaturas dos ativos digitais.</li>
           <li>Clicar sobre as miniaturas e visualizar os detalhes do ativo.</li>
           <li>Clicar sobre a caixa de comentários, digitar algo e enviar.</li>
           <li>vizualizar seu comentário logo abaixo </li>
           <li>Clicar sobre as caixas de status do ativo para mudar para: A fazer, em andamento e finalizado.</li>
           <li>Voltar à página Home usando a seta ou clicando sobre a logo Patch</li>
           <li>Vizualizar as mudanças da minuatura do ativo</li>
           <li>Clicar sobre as categorias uma por uma.</li>
           <li>vizualizar os ativos filtrados por categoria</li>
           <li>Clicar sobre a caixa de relatórios</li>
           <li>Vizualizar as informações contidas em gráfico.</li>
           <li>Sair da aba de relatórios usando o botão "X".</li>
          </ol>
          </td>
         <td>Ao vizualizar a página e conseguir interagir com todos os botões e miniaturas contidas. </td>
         <td> Rafael Batista Mariano</td>
        </tr>
       </table>
