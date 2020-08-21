// What does this program log to the console? Why?

let foo = 'bar'
{
    let foo = 'qux'
}

console.log(foo)

// Outputs bar because it is within scope
