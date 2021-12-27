function About() {
    const user = { name:'fedy', age: 25 }
    return (
        <div>
            <h1 className='title' >{user.name} </h1>
            <h2 style={{ color: "Bleu", fontsize: '20px', TextDecoration: "line-through" }}>{user.age} </h2>
        </div>

    )
}
export default About


