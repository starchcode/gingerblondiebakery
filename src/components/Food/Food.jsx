
import React, { Component } from 'react';
import FoodItem from './FoodItem'
const URL = 'http://localhost:4000'

export default class Food extends Component {
constructor(props){
    super(props);

    this.state = {
        foodData: [],
        foodImg: []
    }
    this.imgFinder = this.imgFinder.bind(this)
}

 imgFinder(data){
    return  this.state.foodImg.find(img => data.featured_media==img.id)
}

componentDidMount() {
const images = {}
    fetch(`${URL}/food`)
    .then(res => {
        if(res.status !==200) this.setState({error: true})
        return res.json()
    })
    .then(jsonResponse => {
        this.setState({foodData: jsonResponse.results,
            foodImg: jsonResponse.images})
})
}

    render() {
        if(this.state.foodData.length > 0){
            return ( 
            <div>
                Hi, This is food page!
                {this.state.foodData.map(data=> {
                    return <FoodItem
                    key={data.id}
                    src={this.imgFinder(data)}
                    price={data.acf.price}
                    description={data.excerpt.rendered}
                    title={data.title.rendered}
                    />
                })}
                </div>
                )
            }else{
                return <div>{this.state.error ? 'There was a problem try again' : 'Loading...'}</div>
            }
    }
            
}