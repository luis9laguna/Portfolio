import food from '../public/img/projects/food.png'
import calculator from '../public/img/projects/calculator.png'
import candy from '../public/img/projects/candy.png'
import crud from '../public/img/projects/crud.png'
import crypto from '../public/img/projects/crypto.png'
import redux from '../public/img/projects/redux.png'
import portfolio from '../public/img/projects/portfolio.png'

const data = [
    {
        id: 1,
        title: 'Food App',
        description: 'A simple page with React to practice shoppingCart and useContext with useReducer.',
        url: 'https://food-orderapp-6855b.web.app',
        github: 'https://github.com/luis9laguna/FoodOrderReact',
        image: food
    },
    {
        id: 2,
        title: 'CrudContext App',
        description: 'Simple CRUD to practice useContext, useState, firebase and forms with formik and without it.',
        url: 'https://crudcontextreact.web.app',
        github: 'https://github.com/luis9laguna/CRUDSimple',
        image: crud
    },
    {
        id: 3,
        title: 'CrudRedux App',
        description: 'It is a simple CRUD with Redux and Axios just to practice and learn.',
        url: 'https://reduxreact-18f5a.web.app',
        github: 'https://github.com/luis9laguna/CRUDReduxAndAxios',
        image: redux
    },
    {
        id: 4,
        title: 'Caculator App',
        description: 'A calculator made with React with history functionality.',
        url: 'https://nimble-panda-8e122d.netlify.app',
        github: 'https://github.com/luis9laguna/Simple-Calculator',
        image: calculator
    },
    {
        id: 5,
        title: 'Candy App',
        description: 'An App made with React imitating the popular game CandyCrush.',
        url: 'https://preeminent-tiramisu-b66868.netlify.app',
        github: 'https://github.com/luis9laguna/CandyCrushReact',
        image: candy
    },
    {
        id: 6,
        title: 'Crypto App',
        description: 'A small app made with React to practice simple fetch of an api.',
        url: 'https://astounding-melba-b43a90.netlify.app',
        github: 'https://github.com/luis9laguna/CryptoFetchReact',
        image: crypto
    },
    {
        id: 7,
        title: 'Portfolio App',
        description: 'Here I am refering to this same page.',
        url: '/',
        github: 'https://github.com/luis9laguna/Portfolio',
        image: portfolio
    }
]

export default data