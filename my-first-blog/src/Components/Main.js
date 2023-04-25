import Articles from "./Articles"

export default function Main(props){
    return(
        <main>
            <section>
                <h1 className="main-blog-title">{props.title}</h1>
                <h3 className="main-blog-title-description">{props.description}</h3>
            </section>
            <img 
                src= {props.img} 
                alt="Main"
                className="main-blog-title-img"
            />
            <Articles 
                subheading= 'This is the first subheading'
                content= 'This is the content related to the subheading'
            />
        </main>
    )
}