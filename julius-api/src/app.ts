import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import { Request, Response } from 'express';

import { conectarServidorNoBD } from './config/db';
import { routerUsuario } from './route/usuario';
import { routerLancamento } from './route/lancamento';

// Cria a aplicação
export const app = express();

// Libera o acesso aos serviços
app.use(cors());

// Habilita o uso do json para as requisições
app.use(express.json());

// Habilita a utilização dos logs em dev
app.use(logger('dev'));

// Conecta ao banco
conectarServidorNoBD();

// Configuração de rotas
app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('/', (req: Request, res: Response) => {
    res.send('API do app Julius');
});