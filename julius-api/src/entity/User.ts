import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Lancamento } from "./Lancamento";

@Entity()
export class Usuario {

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    // nesse caso, indica que um usuário pode ter N lancamentos
    @OneToMany(() => Lancamento, lancamento => lancamento.usuario)
    lancamentos: Lancamento[];
}
