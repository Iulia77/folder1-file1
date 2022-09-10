// to declare a component in React:
// 1. define a class (old school)
// 2. define a function (modern way)

// use JSX instead

// <button>Like</button>

let like = false

// like button component definition
const LikeButton = () => {

    const clickHandler = () => {
           like = !like
           console.log(like ? "You've like this": "You've unliked this" )
    }
    //return   React.createElement('button', null, "Like")
    return(
        <button onClick={clickHandler}><Icon /> Like</button>
    )
}

const Icon = () => {
    return <i class="fa-solid fa-thumbs-up"></i>
}

// render our component in the div#root
let root = ReactDOM.createRoot(document.getElementById('root'))
let rootFooter = ReactDOM.createRoot(document.getElementById('footer'))

root.render(
    //React.createElement(LikeButton, null)
    <LikeButton />
)
rootFooter.render(
    //React.createElement(LikeButton, null)
    <LikeButton />
)
