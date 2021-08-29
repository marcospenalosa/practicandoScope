const person = () =>{
    let saveName = "Name";

    return{

        getName: () => {
            return saveName;
        },

        setName: (name) => {
            saveName = name;
        },
    };
};

const newPerson = person();
console.log(newPerson.getName());

newPerson.setName("Oscar");
console.log(newPerson.getName());