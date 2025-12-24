import Card from "./components/card"

export default function Projects() {
    return (
        <main className="flex flex-col gap-8 max-w-7xl m-auto p-8">
            <section className="flex flex-col gap-2">
                <h1 className="text-white text-4xl font-bold">Projetos</h1>
                <p className="text-white/75 text-sm max-w-2xl">
                    Conheça algumas das soluções que estamos desenvolvendo e
                    evoluindo. Aplicamos mentalidade de produto tanto em
                    projetos próprios quanto em soluções para clientes.
                </p>
            </section>

            <section className="grid grid-cols-3 gap-4">
                <Card
                    src=""
                    alt="Example"
                    title="Lorem Ipsum"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illo, maxime earum assumenda, minima, in tempore nisi aliquam at magnam quaerat aperiam alias libero autem. Veritatis harum repudiandae perferendis aliquid."
                    tag="Exemplo"
                    link="#"
                />
            </section>
        </main>
    )
}
