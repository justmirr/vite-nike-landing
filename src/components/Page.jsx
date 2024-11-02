import './Page.css'

const Page = () => {
    return (
        <div className='container'>
            <div className="left">
                <h1>Your Feet Deserve The Best</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta recusandae quae fugiat molestiae accusantium dolore sequi hic, delectus repellat velit iusto vel atque, porro sapiente, pariatur consequuntur ullam voluptas asperiores? Aut repellendus voluptatem reprehenderit accusamus molestiae corporis nulla iusto. Soluta quo, ut laudantium error mollitia eaque pariatur commodi incidunt nam.</p>
                <span className="buttons-span">
                    <button>Shop Now</button>
                    <button>Category</button>
                </span>
            </div>

            <div className="right">
                <img src="/images/shoe.png" alt="Shoe" />
            </div>
        </div>
    )
}

export default Page