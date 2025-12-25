import Card from "./components/card"

export default function Projects() {
    return (
        <main className="m-auto flex max-w-7xl flex-col gap-8 p-4 md:p-8">
            <section className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl text-white md:text-4xl">
                    Projetos
                </h1>
                <p className="max-w-2xl text-sm text-white/75">
                    Conheça algumas das soluções que estamos desenvolvendo e
                    evoluindo. Aplicamos mentalidade de produto tanto em
                    projetos próprios quanto em soluções para clientes.
                </p>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
