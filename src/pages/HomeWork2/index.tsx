import { Link } from 'react-router-dom'

import './styles.css'

const HomeWork2 = () => (
  <main>
    <nav>
      <Link to="/">
        Home(index.html)
      </Link>
      <a href="mailto:carlos.berti@unifesp.br">Contato(mail)</a>
    </nav>
    <div className="info">
      <img src="https://conteudo.imguol.com.br/c/entretenimento/c3/2017/11/24/albert-einstein-1511565360545_v2_1513x1920.jpg" alt="Foto do cientista Albert Einstein" />
      <div>
        <section className="perfil">
          <h1>
          LOREM IPSUM PERFIL
          </h1>
          <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis felis non varius gravida.
  Cras tincidunt, purus quis semper consequat, odio nunc feugiat erat, blandit tristique
  ipsum nunc viverra nisl. Donec in odio eu erat vehicula cursus at eget lorem. Pellentesque
  volutpat laoreet ante, at vehicula nisl. Curabitur gravida facilisis augue.
          </h2>
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
    </div>
    <table>
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
    </table>
    <div className="mail"><span>E-mail:</span> <a href="mailto:carlos.berti@unifesp.br">carlos.berti@unifesp.br</a></div>
  </main>
)

export default HomeWork2