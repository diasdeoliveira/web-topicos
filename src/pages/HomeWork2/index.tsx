import { Link } from 'react-router-dom'

import * as s from './styles'

const HomeWork2 = () => (
  <main>
    <nav>
      <Link to="/">
        Home(index.html)
      </Link>
      <a href="mailto:carlos.berti@unifesp.br">Contato(mail)</a>
    </nav>
    <s.Info>
      <s.Img src="https://conteudo.imguol.com.br/c/entretenimento/c3/2017/11/24/albert-einstein-1511565360545_v2_1513x1920.jpg" alt="Foto do cientista Albert Einstein" />
      <div>
        <section className="perfil">
          <s.Title>
          LOREM IPSUM PERFIL
          </s.Title>
          <s.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis felis non varius gravida.
  Cras tincidunt, purus quis semper consequat, odio nunc feugiat erat, blandit tristique
  ipsum nunc viverra nisl. Donec in odio eu erat vehicula cursus at eget lorem. Pellentesque
  volutpat laoreet ante, at vehicula nisl. Curabitur gravida facilisis augue.
          </s.Description>
        </section>
        <section className="objetivo">
          <h1>
          OBJETIVO
          </h1>
          <h2>
          Nunc vitae turpis eget neque maximus iaculis sed in lectus. Nulla dapibus mauris sit amet
  nunc dignissim efficitur. Sed consequat eu nibh eu feugiat.
          </h2>
        </section>
      </div>
    </s.Info>
    <s.Table>
      <tr>
        <th>FORMAÇÃO</th>
        <th>QUALIFICAÇÃO TÉCNICA</th>
        <th>EXPERIÊNCIAS PROFISSIONAIS</th>
      </tr>
      <tr>
        <td>Lorem ipsum 1</td>
        <td>Lorem ipsum 2</td>
        <td>Lorem ipsum 3</td>
      </tr>
      <tr>
        <td>Lorem ipsum 1</td>
        <td>Lorem ipsum 2</td>
        <td>Lorem ipsum 3</td>
      </tr>
      <tr>
        <td>Lorem ipsum 1</td>
        <td>Lorem ipsum 2</td>
        <td>Lorem ipsum 3</td>
      </tr>
    </s.Table>
    <s.Mail><span>E-mail:</span> <a href="mailto:carlos.berti@unifesp.br">carlos.berti@unifesp.br</a></s.Mail>
  </main>
)

export default HomeWork2