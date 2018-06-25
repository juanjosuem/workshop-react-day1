import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import MyCollapsable from './MyCollapsable';

/*
from bootstrap
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title</h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>

 */
const listaElementos = (
  <ul>
    <li>ddd</li>
    <li>ff</li>
    <li>gff</li>
    <li>gg</li>
  </ul>
);

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <MyCollapsable title="aaaa" color="primary" opened>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptate sit voluptatem voluptas sunt nihil quisquam quam porro,
            itaque debitis, natus reprehenderit placeat eius veritatis,
            praesentium eos quas explicabo magni!
          </MyCollapsable>
          <MyCollapsable
            title="Segundo Panel"
            color="danger"
            content={listaElementos}
            opened
          />
          <MyCollapsable
            title="Segundo Padddnel"
            color="warning"
            content={listaElementos}
            opened
          />
          <MyCollapsable
            title="Listo el ejemplo"
            color="success"
            opened={false}>
            <MyCollapsable title="fdfdsf" opened={false} />
            <MyCollapsable title="fdfdsf" opened={false} />
          </MyCollapsable>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
