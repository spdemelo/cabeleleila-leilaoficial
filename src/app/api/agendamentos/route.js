import { connectToDB } from "../../../../utils/database"
import Agendamento from "../../../../models/agendamento"

export const GET = async (request) => {
    try {
        await connectToDB()

        const agendamento = await Agendamento.find({})

        return new Response(JSON.stringify(agendamento), { status: 200 })
    } catch (error) {
        return new Response("Falhou em encontrar o agendamento", { status: 500 })
    }
} 