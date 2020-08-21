// Will this program produce an error when run? Why or why not?

const FOO = 'bar'
{
    const FOO = 'qux'
}

console.log(FOO)

// no error, the second const is out of scope