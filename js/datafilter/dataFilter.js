const projects = [
    { name: "Project One",  category: "Ecom", start: 1981, end: 2004},
    { name: "Project Two", category: "Finance", start: 1991, end: 2014},
    { name: "Project Three", category: "Retail", start: 1999, end: 2012},
    { name: "Project Four", category: "Technology", start: 1989, end: 2010},
    { name: "Project Five", category: "Retail", start: 1999, end: 2019},
    { name: "Project Six", category: "Auto", start: 1980, end: 2006},
    { name: "Project Seven", category: "Ecom", start: 1986, end: 2009},
    { name: "Project Eight", category: "Finance", start: 2011, end: 2019},
    { name: "Project Nine", category: "Retail", start: 1971, end: 1989}
]

const grades = [23,45,78,92,34,56,98,45,68,49]

// forEach 
// for ( let i = 0; i < projects.length; i++ ){
//     console.log(projects[i])
// }

projects.forEach( project => console.log(project))


// filter 
// map 
// sort 
// reduce 



// // Foreach

// // projects.forEach(function(product) { 
// //     console.log(product)
// // })

// //projects.forEach( product => console.log(product))

// //filter 
//let eligible = [];
//let eligible = grades.filter( grade => grade >= 60);

// for( let i = 0; i < grades.length; i++){
//     if(grades[i] >= 60 ){
//         eligible.push(grades[i])
//     }
// }

// //console.log(eligible)

// const ecomProjects = projects.filter( project => project.category === "Ecom" );

//  const projects90 = projects.filter( project => project.start > 1980 && project.start < 1990)

// const projects10 = projects.filter(project => project.end - project.start >= 10)

// map

let projectName = projects.map( project => project.name )

// let projectDesc = projects.map( project => `${project.name} ${project.category} : ${project.start} - ${project.end}`)

// //const upGrade = grades.map( grade => grade + 5)

// // sort 

const sortedProjects = projects.sort( (p1, p2) => ( p1.start > p2.start ? 1 : -1) )

// const sortedGrades = grades.sort( (g1, g2) => g2 - g1 )


// // reduce
// const totalGrades = grades.reduce( (total, grade) => total + grade, 0)

const totalSpent = projects.reduce( (total, project) => total + (project.end - project.start), 0 )







const mergeFunc = grades
    .map( grade => grade + 5)
    .filter( grade => grade >= 60)
    .sort((a, b) => b - a)

    // products
    //     apply 10% offer
    //     filter by price range 200 - 4000 
    //     sort desc 

    