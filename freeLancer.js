const freelancerNames = [
    {name:"Prof. Prism", occupation: "Writer", price:30}, 
    {name:"Prof. Spark", occupation: "Teacher", price: 50},
    {name:"Dr. Wire", occupation: "Programmer", price: 70}
];
const names = [
    "Prof. Prism",
    "Prof. Spark",
    "Dr. Wire",
  ];
  
  const occupations = [
    "Programmer",
    "Teacher",
    "Writer"
  ];

function randomName() {
    const nameNum = Math.floor(Math.random() * names.length)
    const occuNum = Math.floor(Math.random() * occupations.length)
    const price = Math.floor(Math.random()*100) // price is a number so we can just mutiply by the numbers between 0 and 100

    const freelancerPick= {
     name: names[nameNum],
     occupation: occupations[occuNum],
     price: price

    }
    //console.log(freelancerPick)
    return freelancerPick
    
} 

const randomFreelancerOne = randomName()
const randomFreelancerTwo = randomName()

const freelancerPicks = [randomFreelancerOne, randomFreelancerTwo]

const selection = document.querySelector(".selection")

function render(){
    const html = freelancerPicks.map((freelancerPick) =>{
        return `<div>${freelancerPick.name}, ${freelancerPick.occupation}, ${freelancerPick.price}</div>`
    })
    
    
    selection.innerHTML = html.join("")
    //console.log(selection)

    let total =0
    freelancerPicks.forEach((freelancerPick) =>{
        total ===freelancerPick.price;
    })
    const averagePrice = document.querySelector(".averagePrice")
    const averagePriceNum = total/freelancerPicks.length
    const roundedNum = averagePriceNum.toFixed(2)
    averagePrice.innerHTML = (`The average price to hire a freelancer at this time is $${roundedNum}`)
}
render()
    const interval =setInterval(() =>{
    const obj = randomName()
    

   freelancerPicks.push(obj)
    
   render()
    if(freelancerPicks.length === 2){
        clearInterval(interval)
    }
}, 3000)

render()