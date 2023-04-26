export default function Main(props){
    return(
        <main className="flex-col">
            <section>
                <h1 className="text-[4rem] w-max ml-auto mr-auto">{props.title}</h1>
                <h3 className="w-max ml-auto mr-auto mb-[1rem] text-2xl">{props.description}</h3>
            </section>
            <img 
                src= {props.img} 
                alt="Main"
                className="w-[99%] mr-auto ml-auto"
            />
            <article className="mt-[1rem] ml-[1rem]">
                <h2 className="text-4xl">{props.subheading}</h2>
                <p className="text-xl mt-[0.5rem] ">{props.content}</p>
            </article>
        </main>
    )
}