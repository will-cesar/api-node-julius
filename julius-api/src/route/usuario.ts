import { Request, Response, Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";
import { Usuario } from "../entity/User";

export const routerUsuario = Router();

const usuarioCtrl = new UsuarioController();

// Serviço para salvar um novo usuário
routerUsuario.post('/', async (req: Request, res: Response) => {
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);

    res.json(usuarioSalvo);
});

// Serviço para recuperar todos os usuários
routerUsuario.get('/', async (req: Request, res: Response) => {
    const usuarios = await usuarioCtrl.recuperarTodos();
    res.json(usuarios);
});

// Serviço para recuperar os lançamentos de um determinado usuário
routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario);
    res.json(lancamentos);
});