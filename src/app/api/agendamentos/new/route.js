import { connectToDB } from "../../../../../utils/database"
import Agendamento from "../../../../../models/agendamento"

export const POST = async (request) => {
    const {nome, cpf, dia, horario, procedimento} = await request.json();
    try {
        await connectToDB();
        const newagendamento = new Agendamento({nome, cpf, dia, horario, procedimento});

        await newagendamento.save();
        return new Response(JSON.stringify(newagendamento), { status: 201 })
    } catch (error) {
        return new Response("Não foi possível realizar seu agendamento.", { status: 500 });
    }}